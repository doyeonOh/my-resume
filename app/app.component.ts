import { Component, OnInit, ViewChild } from '@angular/core';

import { MeComponent } from './components/me.component';
import { SkillsComponent } from './components/skills.component';
import { WorksComponent } from './components/works.component';
import { PortpolioComponent } from './components/portpoilo.component';

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
    <section translate-element #first="tfe" [startY]="-987" (mousewheel)="moveSection($event, null, first);" id="first" style="z-index:9;">
      <me [id]="1" [currentFocusId]="currentFocusId"></me>
    </section>
    <section translate-element #second="tfe" [startY]="-987" (mousewheel)="moveSection($event, first, second)" id="second" style="z-index:8">
      <skills [id]="2" [currentFocusId]="currentFocusId"></skills>
    </section>
    <section translate-element #third="tfe" [startY]="-987" (mousewheel)="moveSection($event, second, third)" id="third" style="z-index:7">
      <works [id]="3" [currentFocusId]="currentFocusId"></works>
    </section>
    <section translate-element #fourth="tfe" [startY]="-987" (mousewheel)="moveSection($event, third, fourth)" id="fourth" style="z-index:6">
      <portpolio [id]="4" [currentFocusId]="currentFocusId"></portpolio>
    </section>
    <section translate-element #fifth="tfe" [startY]="-987" (mousewheel)="moveSection($event, fourth, fifth)" id="fifth" style="z-index:5">
    </section>
    <section translate-element #sixth="tfe" [startY]="-987" (mousewheel)="moveSection($event, fifth, null)" id="sixth" style="z-index:4">
    </section>
  `,
  directives: [
      TranslateElement, MeComponent, SkillsComponent, WorksComponent, PortpolioComponent
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
  `]
})

export class AppComponent implements OnInit{
  public currentFocusId : string = 'first';
  public focusMap : Array<string> = [
    'first', 'second', 'third', 'fourth', 'fifth', 'sixth'
  ];
  public focusOn : Object = {
    'first' : 1, 'second' : 2, 'third': 3, 'fourth' : 4, 'fifth' : 5, 'sixth' : 6
  };

  moveSection(e, prev, next){
    let moveToTop = e.deltaY > 0;
    if(moveToTop && next){
      next.toggle(moveToTop);

      let id = next._el.nativeElement.id;
      this.currentFocusId = this.focusOn[id] + 1;

    }else if(!moveToTop && prev){
      prev.toggle(moveToTop);

      let id = prev._el.nativeElement.id;
      this.currentFocusId = this.focusOn[id];

    }
  }

  ngOnInit(){

  }
}
