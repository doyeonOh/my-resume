import { Component, ViewChildren, OnInit, ViewChild } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { MeComponent } from './components/me.component';
import { SkillsComponent } from './components/skills.component';
import { WorksComponent } from './components/works.component';
import { PortpolioComponent } from './components/portpoilo.component';

import { TranslateElement } from './directives/translate-element';

import { AnimationService } from './services/animation.service';

@Component({
  selector: 'my-app',
  template: `
    <nav style="z-index:15;">
      <div>
        <ul>
          <li #nav class="active">1</li>
          <li #nav>2</li>
          <li #nav>3</li>
          <li #nav>4</li>
        </ul>
      </div>
    </nav>
    <section translate-element #first="tfe" [startY]="-987" (mousewheel)="moveSection($event, null, first);" id="first" style="z-index:9;">
      <me [id]="1" [currentFocusId]="currentFocusId"></me>
    </section>
    <section translate-element #second="tfe" [startY]="-987" (mousewheel)="moveSection($event, first, second)" id="second" style="z-index:8">
      <skills [id]="2" [currentFocusId]="currentFocusId"></skills>
    </section>
    <section translate-element #third="tfe" [startY]="-987" (mousewheel)="moveSection($event, second, third)" id="third" style="z-index:7">
      <works [id]="3" [currentFocusId]="currentFocusId"></works>
    </section>
    <section translate-element #fourth="tfe" [startY]="-987" (mousewheel)="moveSection($event, third, null)" id="fourth" style="z-index:6">
      <portpolio [id]="4" [currentFocusId]="currentFocusId"></portpolio>
    </section>
  `,
  directives: [
      TranslateElement, MeComponent, SkillsComponent, WorksComponent, PortpolioComponent
  ],
  providers: [
      AnimationService
  ],
  styles: [`

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
    section#first{     background-color: #2F292B;  color: white; }
    section#second{    background-color: #01a5b1;  color:white;  }
    section#third{     background-color: #3A7AA6;  color:white;}
    section#fourth{    background-color: #13b0a5;  color:white; }
    section#fifth{     background-color: #b4d6a4; }
    section#sixth{     background-color: #67bc9a; }
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
    nav{
      top:50%;
      right: 34px;
      position:fixed;
      z-index:200;
      box-shadow:none;
      background-color: transparent;
      margin:  0;
      padding: 0;
      border: 0;
      width:0;
      vertical-align: baseline;
    }
    nav ul li.active{
      background: #fff;
    }
    nav ul li{
      border: 2px solid rgba(255,255,255,0.4);
      margin-bottom: 10px;
      width: 12px;
      height: 12px;
      display: block;
      border-radius: 50%;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      -o-border-radius: 50%;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      -ms-box-sizing: border-box;
      -o-box-sizing: border-box;
      text-indent: -9999px;
      white-space: nowrap;
      overflow: hidden;
      cursor: pointer;
      list-style-position: inside;
    }

  `]
})

export class AppComponent implements OnInit{

  @ViewChildren('nav') navItems;

  public currentFocusId : string = 'first';
  public focusOn : Object = {
    'first' : 1, 'second' : 2, 'third': 3, 'fourth' : 4, 'fifth' : 5, 'sixth' : 6
  };

  moveSection(e, prev, next){
    let moveToTop = e.deltaY > 0;
    if(moveToTop && next){
      next.toggle(moveToTop);
      this.currentFocusId = this.focusOn[next._el.nativeElement.id] + 1;
    }else if(!moveToTop && prev){
      prev.toggle(moveToTop);
      this.currentFocusId = this.focusOn[prev._el.nativeElement.id];
    }
    // 우측 네비게이터 업데이트
    this.updateNavigator(this.currentFocusId);
  }

  updateNavigator(focusId){
    this.navItems.forEach((item)=>{
        item.nativeElement.classList.remove('active');
        if(item.nativeElement.innerText == focusId){
          console.log("hi");
          item.nativeElement.classList.add('active');
        }
    });
  }
  ngOnInit(){

  }
}
