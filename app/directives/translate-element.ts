import { Directive, OnInit, ElementRef } from 'angular2/core';
import {AnimationBuilder} from 'angular2/src/animate/animation_builder';

@Directive({
    selector: '[translate-element]',
    host: {

    },
    inputs: ['startY', 'doStartInit', 'delay'],
    exportAs: 'tfe'
})

export class TranslateElement implements OnInit {
    public startY: number = 200;
    public delay: number = -1;
    public doStartInit:Boolean = false;
    private _isRunning: Boolean = false;

    constructor(private _ab: AnimationBuilder, private _el: ElementRef) { }

    ngOnInit(){
      if(this.doStartInit){
        this.toggle();
      }
    }

    run(){
      if (!this._isRunning) {
        let animation = this._ab.css();
        animation.setDuration(300);
        if(this.delay > 0){
          animation.setDelay(300 * this.delay);
        }

        animation.setFromStyles({ transform: "translate(0px," + this.startY + "px)", opacity: 0 });
        animation.setToStyles({ transform: "translate(0px,0px)", opacity: 1 });

        this._isRunning = true;
        animation.start(this._el.nativeElement).onComplete(() => {
            this._isRunning = false;
        });
      }
    }

    public toggle(moveToTop:boolean = false) {
        if (!this._isRunning) {
            let animation = this._ab.css();
            animation.setDuration(300);
            if(this.delay > 0){
              animation.setDelay(300 * this.delay);
            }
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
            });
        }
    }
}
