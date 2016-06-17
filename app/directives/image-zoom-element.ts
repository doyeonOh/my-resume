import { Directive, ElementRef } from 'angular2/core';
import {AnimationBuilder} from 'angular2/src/animate/animation_builder';

@Directive({
  selector: '[img-zoom-element]',
  host: {
    '(click)': 'clickElement($event)'
  },
  exportAs: 'ize'
})

export class ImageZoomElement{

  private _isRunning: Boolean = false;
  private _isDisplayed: Boolean = false;
  private _placeholder: HTMLElement;

  constructor(private _ab: AnimationBuilder, private _el: ElementRef) {
    // placeholder 지정해야 이전 view 가 안깨짐
    let el = this._el.nativeElement;
    var placeholder = document.createElement("div");
    placeholder.setAttribute("class", "image-zoom-placeholder");

    // wrapping
    el.parentNode.insertBefore(placeholder, el);
    placeholder.appendChild(el);

    this._placeholder = placeholder;
  }

  clickElement(e){
    this.toggle();
  }
  toggle(){
    if( !this._isRunning){
      let animation = this._ab.css();
      let animation2 = this._ab.css();
      let el;
      let placeholder;
      let overlay;

      // classname 이  placeholder  인것 가져오기 (순수 javascript 로 짜니 코드가 드러워진다..)
      while ((el = this._el.nativeElement.parentElement) && !el.classList.contains("image-zoom-placeholder"));
        placeholder = el;


      // styiling
      placeholder.style.width     = placeholder.getBoundingClientRect().width + "px";
      placeholder.style.height    = placeholder.getBoundingClientRect().height + "px";
      placeholder.style.position  = "relative";
      placeholder.style.top       = "0";
      placeholder.style.left      = "0";

      let inDuration = 275;
      let outDuration = 200;

      let originalWidth   = this._el.nativeElement.width;
      let originalHeight  = this._el.nativeElement.height;
      let windowWidth     = window.innerWidth;
      let windowHeight    = window.innerHeight;
      let ratio           = 0;
      let widthPercent    = originalWidth / windowWidth;
      let heightPercent   = originalHeight / windowHeight;
      let newWidth        = 0;
      let newHeight       = 0;

      if (widthPercent > heightPercent) {
        ratio = originalHeight / originalWidth;
        newWidth = windowWidth * 0.9;
        newHeight = windowWidth * 0.9 * ratio;
      }
      else {
        ratio = originalWidth / originalHeight;
        newWidth = (windowHeight * 0.9) * ratio;
        newHeight = windowHeight * 0.9;
      }

      let newLeft   = windowWidth / 2 - originalWidth / 2 - placeholder.getBoundingClientRect().left;
      let newTop     = windowHeight / 2 - originalHeight / 2 - placeholder.getBoundingClientRect().top;
      let newScaleX   = newWidth / originalWidth;
      let newScaleY   = newHeight / originalHeight;

      if(this._isDisplayed){
        animation.setDuration(outDuration);
        animation.setFromStyles({
          transform : "translate(" + newLeft + "px," + newTop  + "px" + ") scale(" + newScaleX + "," + newScaleY + ")",
          position  : "absolute",
          "z-index" : 1000,
          opacity   : 1 }
        );
        animation.setToStyles({
          transform: "scale(1)",
          "z-index" : "",
          position: "relative",
          opacity: 1 });
        this._isDisplayed = false;

        animation2.setDuration(outDuration);
        animation2.setFromStyles({
          opacity: 1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          "background-color": "#292929",
          "z-index": 1000,
          position: "fixed",
          "will-change": "opacity"
        });
        animation2.setToStyles({
          opacity: 0
        });

        overlay
        var childNodes = this._el.nativeElement.parentNode.children;

        for(var i = 0; i < childNodes.length; i++){
          var node = childNodes[i];
          if(node.className == "image-zoom-overlay")
            overlay = node;
        }

      }else{
        animation.setDuration(inDuration);
        animation.setFromStyles({
          transform: "scale(1)",
          "z-index" : "",
          position: "relative",
          opacity: 1 });
        animation.setToStyles({
          transform : "translate(" + newLeft + "px," + newTop  + "px" + ") scale(" + newScaleX + "," + newScaleY + ")",
          position  : "absolute",
          "z-index" : 1000,
          opacity   : 1 }
        );
        this._isDisplayed = true;

        overlay = document.createElement("div");
        overlay.setAttribute("class", "image-zoom-overlay");

        this._el.nativeElement.parentNode.insertBefore(overlay, this._el.nativeElement);

        animation2.setDuration(inDuration);
        animation2.setFromStyles({
          opacity: 0
        });
        animation2.setToStyles({
          opacity: 1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          "background-color": "#292929",
          "z-index": 1000,
          position: "fixed",
          "will-change": "opacity"
        });

      }


      // 상위 노드의 overflow:hidden 없애기
      var ancestorsChanged = undefined;
      var ancestor = placeholder.parentNode;
      var count = 0;
      while (ancestor !== null  && ancestor.tagName !== "BODY" ) {
        var curr = ancestor;
        if (curr.style.overflow !== 'visible') {
          curr.style.overflow = 'visible';
          if (ancestorsChanged === undefined) {
            ancestorsChanged = curr;
          }
          else {
            // ancestorsChanged = ancestorsChanged.add(curr);
          }
        }
        ancestor = ancestor.parentNode;
      }

      this._isRunning = true;

      animation.start(this._el.nativeElement).onComplete(() => {
          this._isRunning = false;
          // 확대 꺼진 후 overlay 삭제
          if(!this._isDisplayed){
            var childNodes = this._el.nativeElement.parentNode.children;

            for(var i = 0; i < childNodes.length; i++){
              var node = childNodes[i];
              if(node.className == "image-zoom-overlay")
                node.remove();
            }
          }


      }).eventClearFunctions;

      // 번쩍 거리는 현상있어서 overlay 주석처리
      // animation2.start(overlay).onComplete(() => {
      //   console.log("good");
      // });
    }
  }

}
