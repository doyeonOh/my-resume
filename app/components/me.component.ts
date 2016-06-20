import { Component, Input, OnInit, OnChanges } from 'angular2/core';

import { TranslateElement } from '../directives/translate-element';

@Component({
  selector: 'me',
  template: `
    <div style="position:absolute;left:33%;top:35%;">
      <div translate-element [startY]="200" [doStartInit]="true" [delay]="1" class="left my-box">

      </div>
      <div class="right">
        <h2 translate-element [startY]="200" [doStartInit]="true" [delay]="2" class="right-top">
          <b>오 도 연 | Doyeon Oh</b>
          <br>
          web developer
        </h2>
        <div translate-element [startY]="200" [doStartInit]="true" [delay]="3" class="right-bottom">
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

export class MeComponent implements OnChanges{
  @Input()
  id : string;
  @Input()
  currentFocusId : string;

  ngOnChanges(){
    if(this.currentFocusId === this.id){
      console.log(this.currentFocusId);
    }
  }
}
