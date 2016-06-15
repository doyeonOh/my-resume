import { Directive, OnInit, ElementRef } from 'angular2/core';
import {AnimationBuilder} from 'angular2/src/animate/animation_builder';

@Directive({
    selector: '[translate-element]',
    host: {

    },
    inputs: ['startY'],
    exportAs: 'tfe'
})

export class TranslateElement  {
    public startY: number = 0;
    private _isRunning: Boolean = false;

    constructor(private _ab: AnimationBuilder, private _el: ElementRef) { }

    toggle(moveToTop:boolean = false) {
      console.log(this._isRunning);
        if (!this._isRunning) {
            let animation = this._ab.css();
            animation.setDuration(300);

            if(moveToTop){
              animation.setFromStyles({ transform: "translate(0px,0px)",  opacity: 1 });
              animation.setToStyles({ transform: "translate(0px," + this.startY + "px)", opacity: 0 });
            }else{
              animation.setFromStyles({ transform: "translate(0px," + this.startY + "px)", opacity: 0 });
              animation.setToStyles({ transform: "translate(0px,0px)", opacity: 1 });
            }
            this._isRunning = true;

            animation.start(this._el.nativeElement).onComplete(() => {
                this._isRunning = false;
            }).eventClearFunctions;
        }
    }
}
