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
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [
      TranslateElement, MeComponent, SkillsComponent, WorksComponent, PortpolioComponent
  ],
  providers: [
      AnimationService
  ],
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
          item.nativeElement.classList.add('active');
        }
    });
  }
  ngOnInit(){

  }
}
