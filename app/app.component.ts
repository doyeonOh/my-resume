import { Component, HostListener } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { SkillsComponent } from './components/skills.component';
import { TranslateElement } from './directives/translate-element';

@Component({
  selector: 'my-app',
  template: `
    <!--
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand" href="/">Resume</a>
          </div>
          <div >
            <ul id="navi" class="navbar-text pull-right" style="float:left; margin: none; list-style:none;">
              <li><a>skills</a></li>
              <li><a>portpolio</a></li>
              <li><a>work experience</a></li>
              <li><a>education</a></li>
              <li><a>contact</a>  </li>
            </ul>
          </div>
      </div>
    </nav>
    -->
    <section translate-element #first="tfe" [startY]="-987"(mousewheel)="moveSection($event, null, first);" id="main" style="z-index:9;">
      <div>
        <h2 style="display:block;top:35%;left:48%;">
          <b>오 도 연 | Doyeon Oh</b>
          <br>
          web developer
        </h2>
        <div style="width:15em; height:15em;border: 1px solid white;position:absolute;left:33%;top:35%;">

        </div>
        <div style="position:absolute;left:48%;top:50%;line-height:1.1;">
            <p>Email: odyody12@gmail.com</p>
            <p>facebook: odyody12@gmail.com</p>
            <p>gitHub: odyody12@gmail.com</p>
        </div>
      </div>
    </section>
    <section translate-element #second="tfe" [startY]="-987" (mousewheel)="moveSection($event, first, second)" id="mid" style="z-index:8">
      <div>
        <h2 style="display:block; top:30%;left:30%;">
          보유 기술
        </h2>
        <div style="position:absolute; left:30%; top:40%; width:20%;border-right: 1px solid #ccd0d4">
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
        <h2 style="display:block; top:30%;left:52%;">
          학력
        </h2>
        <div style="position:absolute; left:52%; top:40%; width:20%;">
          <h3 style="display:block; line-height:1.5; ">
            <p style="display:inline;"><b>제주대학교</b> <span style="font-size:0.5em;;text-align:right;">2006.3 ~ 2012.2</span></p>
            <br>
            <h5>컴퓨터 공학과 학사 졸업</h5>
          </h3>
          <p style="margin-top:2em;">
            학과 내의 있는 SoftLab 에서 안드로이드 프로젝트를 주로 진행하였습니다. 그 중 4개의 App 을 퍼블리싱 하였습니다.
          </p>
          <p style="background: #fff">
            |
            <a target="_blank" href="https://play.google.com/store/apps/details?id=softlab.jeju.ody1">올레길 App</a>,
            <a target="_blank" href="https://www.tstore.co.kr/userpoc/apps/view?pid=0000252576">주역 App</a>,
            <a target="_blank" href="https://www.tstore.co.kr/userpoc/apps/view?pid=0000256020">사주 App</a>,
            <a target="_blank" href="https://www.tstore.co.kr/userpoc/apps/view?pid=0000256101">육효 App</a>
          </p>
        </div>
      </div>
    </section>
    <section translate-element #third="tfe" [startY]="-987" (mousewheel)="moveSection($event, second, third)" id="third" style="z-index:7">
      <div>
        2222222222222222
      </div>
    </section>
    <section translate-element #fourth="tfe" [startY]="-987" (mousewheel)="moveSection($event, third, fourth)" id="fourth" style="z-index:6">
      <div>
        2222222222222222
      </div>
    </section>
    <section translate-element #fifth="tfe" [startY]="-987" (mousewheel)="moveSection($event, fourth, fifth)" id="fifth" style="z-index:5">
      <div>
        2222222222222222
      </div>
    </section>
    <section translate-element #sixth="tfe" [startY]="-987" (mousewheel)="moveSection($event, fifth, null)" id="sixth" style="z-index:4">
      <div>
        2222222222222222
      </div>
    </section>
    <div >
    </div>
  `,
  directives: [
      TranslateElement
  ],
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
    section{
      width:100%;
      height:100%;
      position:fixed;
      background-repeat: no repeat;
      background-position: center;
      background-size: cover;
      overflow: hidden;
    }
    h2{
      font-size: 40px;
      line-height: 1.2em;
      position: absolute;
    }
    section#main{     background-color: #2F292B;  color: white; }
    section#mid{      background-color: #01a5b1;  color:white;  }
    section#end{      background-color: #F2E0C8; }
    section#third{    background-color: #FFF }
    section#fourth{   background-color: #FFF }
    section#fifth{    background-color: #FFF }
    section#sixth{    background-color: #FFF }
    .left{
      width:30%;
      left:30%;
      posiiton: relative;
      float: left;
    }
    .pull-right{
      float: right!important;
      margin-right: -15px;
    }
    ul#navi{
      float:left;
      margin: 0;
    }
    ul>li{
      display: block;
      position: relative;
    }
    ul#navi>li{
      float: left;
      display: block;
      position: relative;
    }

    ul#navi>li>a{
      position: relative;
      display: block;
      padding: 10px 15px;
    }
  `]
})

export class AppComponent{

  moveSection(e, prev, next, num){
    let moveToTop = e.deltaY > 0;
    if(moveToTop && next){
      next.toggle(moveToTop);
    }else if(!moveToTop && prev){
      prev.toggle(moveToTop);
    }
  }


}
