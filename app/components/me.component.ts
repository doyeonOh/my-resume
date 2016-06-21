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
            <p>Email: odyody12@gmail.com</p>
            <p>facebook: odyody12@gmail.com</p>
            <p>gitHub: odyody12@gmail.com</p>
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
      margin-top:0.5em;
      margin-bottom:2em;
    }
    .right-bottom{
      position:relative;
      line-height:1.1;
    }
    .my-box{
      width:15em;
      height:15em;
      border: 1px solid white;
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
