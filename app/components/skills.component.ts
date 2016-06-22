import { Component, ViewChildren, OnInit, Input, OnChanges } from 'angular2/core';


import { TranslateElement } from '../directives/translate-element';
import { AnimationService } from '../services/animation.service';


@Component({
  selector: 'skills',
  template: `
      <div style="position:absolute;left:30%; top:30%;">
        <div class="area">
          <div>
            <h2 class="title">
              보유 기술
            </h2>
            <div class="progress-box" #item>
              <div style="width:90%;">
                <div class="progress">
                  <div #skill class="progress-bar">
                    <p style="">Java</p>
                  </div>
                </div>
                <div class="progress">
                  <div #skill class="progress-bar">
                    <p style="">Javascript, jQuery</p>
                  </div>
                </div>
                <div class="progress">
                  <div #skill class="progress-bar">
                    <p style="">PostgreSQL</p>
                  </div>
                </div>
                <div class="progress">
                  <div #skill class="progress-bar">
                    <p style="">HTML, CSS</p>
                  </div>
                </div>
                <div class="progress">
                  <div #skill class="progress-bar">
                    <p style="">NodeJs</p>
                  </div>
                </div>
                <div class="progress">
                  <div #skill class="progress-bar">
                    <p style="">RasberryPi</p>
                  </div>
                </div>
                <div class="progress">
                  <div #skill class="progress-bar">
                    <p style="">Angular2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="area" >
          <div>
            <h2 class="title" >
              학력
            </h2>
            <div class="edu-box" #item>
              <h3 class="edu-title">
                <p style="display:inline;"><b>제주대학교</b> <span style="font-size:0.5em;;text-align:right;">2006.3 ~ 2012.2</span></p>
                <br>
                <h5>컴퓨터 공학과 학사 졸업</h5>
              </h3>
              <p style="margin-top:2em;">
                학과 내의 있는 SoftLab 에서 <b>안드로이드 프로젝트</b>를 주로 진행하였습니다. 그 중 4개의 App 을 퍼블리싱 하였습니다.
              </p>
              <p style="background: #fff">
                |
                <a target="_blank" href="https://play.google.com/store/apps/details?id=softlab.jeju.ody1">올레길 App</a>,
                <a target="_blank" href="http://onestore.co.kr/userpoc/apps/view?pid=0000252576">주역 App</a>,
                <a target="_blank" href="http://onestore.co.kr/userpoc/apps/view?pid=0000256020">사주 App</a>,
                <a target="_blank" href="http://onestore.co.kr/userpoc/apps/view?pid=0000256101">육효 App</a>
              </p>
            </div>
          </div>
        </div>
      </div>
  `,
  styles: [`
    .progress{
      height:30px;
      margin-top: 7px;
      margin-bottom: 7px;
      overflow: hidden;
      border-radius: 4px;
      background-color: #E4E7EB;
    }
    .progress-bar{
      background-color: #E82C0C;
      height: 100%;
      text-indent:1em;
      line-height:30px;
      text-tranform: uppercase;

    }
    .title{
      display:block; position:relative;margin-bottom:1em;
    }

    .area{
      position:relative; width:40%;float:left;
    }

    .progress-box{
      position:relative;border-right: 1px solid #ccd0d4;margin-right:2em;
    }
    .edu-box{
      position:relative;width:90%;
    }

    .edu-title{
      display:block; line-height:1.5;
    }

    .filled_enter{
      width:0%;
        transition: all ease-in 0.3s;
    }

    .filled_active{
      transition: all ease-in 1.0s;
    }
  `],
  directives: [ TranslateElement ]
})

export class SkillsComponent implements  OnChanges {
  @Input() id : string;
  @Input() currentFocusId : string;

  @ViewChildren('item') items;
  @ViewChildren('skill') skills;

  runAnimation : boolean = false;
  skillPersents : Array<number> = [
    70, 60, 60, 50, 40, 35, 45
  ];

  constructor(
    private _anim: AnimationService
  ) {}

  ngOnChanges(){
    if(this.currentFocusId === this.id && !this.runAnimation){
      this.items.forEach((item, index)=>{
        let el = item.nativeElement;
        this._anim.smoothAnimation(el, 300 * ( index + 1 ));
      });
      this.skills.forEach((item, index)=>{
        let el = item.nativeElement;
        this._anim.filledAnimation(el, this.skillPersents[index], 600 );
      });

      this.runAnimation = true;
    }

  }
}
