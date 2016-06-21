import { Component, ViewChild, OnInit, Input, OnChanges } from '@angular/core';


import { TranslateElement } from '../directives/translate-element';


@Component({
  selector: 'skills',
  template: `
      <div style="position:absolute;left:30%; top:30%;">
        <div class="area">
          <div>
            <h2 translate-element #title1="tfe" [delay]="5" [doStartInit]="true" [startY]="-200" class="title">
              보유 기술
            </h2>
            <div class="progress-box">
              <div style="width:90%;">
                <div class="progress">
                  <div class="progress-bar" style="width: 70%;">
                    <p style="">Java</p>
                  </div>
                </div>
                <div class="progress">
                  <div class="progress-bar" style="width: 60%;">
                    <p style="">Javascript, jQuery</p>
                  </div>
                </div>
                <div class="progress">
                  <div class="progress-bar" style="width: 60%;">
                    <p style="">PostgreSQL</p>
                  </div>
                </div>
                <div class="progress">
                  <div class="progress-bar" style="width: 50%;">
                    <p style="">HTML, CSS</p>
                  </div>
                </div>
                <div class="progress">
                  <div class="progress-bar" style="width: 40%;">
                    <p style="">NodeJs</p>
                  </div>
                </div>
                <div class="progress">
                  <div class="progress-bar" style="width: 30%;">
                    <p style="">RasberryPi</p>
                  </div>
                </div>
                <div class="progress">
                  <div class="progress-bar" style="width: 40%;">
                    <p style="">Angular2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="area">
          <div>
            <h2 class="title" >
              학력
            </h2>
            <div class="edu-box">
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
  `],
  directives: [ TranslateElement ]
  // animations: [
  //   trigger('test', [
  //     state('on',style({opacity:1})),
  //     state('off', style({opacity:0})),
  //     transition('on => off', [ animate("1s")])
  //   ])
  // ]
})

export class SkillsComponent implements  OnChanges {
  @Input() id : string;
  @Input() currentFocusId : string;

  @ViewChild('title1') title1;

  ngOnChanges(){
    if(this.currentFocusId === this.id){
      console.log(this.title1);
      this.title1.run();
    }
  }
}
