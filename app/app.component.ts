import { Component, OnInit } from 'angular2/core';
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
            학과 내의 있는 SoftLab 에서 <b>안드로이드 프로젝트</b>를 주로 진행하였습니다. 그 중 4개의 App 을 퍼블리싱 하였습니다.
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
        <h2 style="display:block; top:30%;left:40%;">
          Work Experience
        </h2>
        <div style="position:absolute; left:40%; top:40%; width:20%;">
          <h3 style="display:block; line-height:1.5; ">
            <p style="display:inline;"><b>웹케시</b> <span style="font-size:0.5em;;text-align:right;">2013.1 ~ 2015.10 (2년 10개월)</span></p>
            <br>
            <h5>WEB DEVELOPER</h5>
          </h3>
          <p style="margin-top:2em;">
            유치원 통합 업무 서비스인 <b>아이모아 서비스</b>와 재무회계 서비스인 <b>Sbook 프로젝트</b>를 진행하였습니다.
          </p>
          <p>
            - Java, Jsp/Servlet, Javascript 이용한 웹 페이지 개발
            <br>
            - DDL, DML 사용 및 프로시져 구현 (PostgreSQL)
            <br>
            - User interaction 을 위한 모듈 구현(jQuery)
            <br>
            - 사내 여러 서비스 팀과 API 연계를 통한 협업
          </p>
          <p style="background: #fff">
            |
            <a target="_blank" href="https://www.imore.co.kr/">아이모아 서비스</a>,
            <a target="_blank" href="https://www.bizplay.co.kr/main_0001_04.act">sbook 서비스(s재무회계)</a>
          </p>
        </div>
      </div>
    </section>
    <section translate-element #fourth="tfe" [startY]="-987" (mousewheel)="moveSection($event, third, fourth)" id="fourth" style="z-index:6">
      <div>
        <h2 style="display:block; top:23%;left:30%;">
          포트폴리오
        </h2>
        <div style="position:absolute; top:30%; left:30%;float:left;">
          <div style="position:relative;display:block; padding-right:1em;width:25em;float:left;">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="resources/img/portpolio/settle2.png">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Sbook 재무회계 서비스<i class="material-icons right">more_vert</i></span>
                <p><a href="#">사이트로 이동</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Sbook 재무회계 서비스<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>

          <div style="position:relative;display:block;padding-right:1em;width:25em;float:left;">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="resources/img/portpolio/imore2.png">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">아이모아 서비스<i class="material-icons right">more_vert</i></span>
                <p><a href="#">사이트로 이동</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">아이모아 서비스<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>
        </div>
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
    section#third{    background-color: #E6E3FE; }
    section#fourth{   background-color: #3A7AA6;  color:white; }
    section#fifth{    background-color: #95836D }
    section#sixth{    background-color: #EED9AC }
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

export class AppComponent implements OnInit{

  moveSection(e, prev, next, num){
    let moveToTop = e.deltaY > 0;
    if(moveToTop && next){
      next.toggle(moveToTop);
    }else if(!moveToTop && prev){
      prev.toggle(moveToTop);
    }
  }
  ngOnInit(){
    // document.getElementsByClassName('materialboxed').materialbox();

  }

}
