import { Component, ViewChildren, Input, AfterViewInit, OnChanges } from 'angular2/core';

import { TranslateElement } from '../directives/translate-element';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'me',
  template: `
    <div style="position:absolute;left:33%;top:35%;">
      <div #item class="left my-box">

      </div>
      <div class="right" #item>
        <h2 class="right-top">
          <b>오 도 연 | Doyeon Oh</b>
          <br>
          web developer
        </h2>
        <div class="right-bottom">
            <p><i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;<a href="https://www.facebook.com/odyody12" target="_blank" style="color:white">@odyody12</a></p>
            <p><i class="fa fa-github fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;<a href="https://github.com/doyeonOh" target="_blank" style="color:white">@doyeonOh</a></p>
            <p><i class="fa fa-paper-plane fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;odyody12@gmail.com</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .left{
      position:relative;
      float:left;
      margin:1em;
    }
    .right{
      float:left;
      margin:1em;
    }
    .right-top{
      display:block;
      position:relative;
      margin-top: 0.1em;
      margin-bottom:1em;
    }
    .right-bottom{
      position:relative;
      line-height:1.1;
    }
    .my-box{
      width:15em;
      height:15em;
      border: 1px solid white;
      background-image: url('resources/img/mark/me2.jpg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 15em 15em;
    }
  `],
  directives: [ TranslateElement ]
})

export class MeComponent implements AfterViewInit, OnChanges{
  @Input() id : string;
  @Input() currentFocusId : string;

  @ViewChildren('item') items;

  constructor(
    private _anim : AnimationService
  ) {}

  ngOnChanges(){
    // if(this.currentFocusId === this.id){
    //   let count = 0;
    //   this.items.forEach((item)=>{
    //     count++;
    //     let el = item.nativeElement;
    //     this._anim.smoothAnimation(el, 300 * count);
    //   });
    // }
  }

  ngAfterViewInit(){
    let count = 0;
    this.items.forEach((item)=>{
      count++;
      let el = item.nativeElement;
      this._anim.smoothAnimation(el, 300 * count);
    });
  }
}
