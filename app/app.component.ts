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
  host: {
    "(window:scroll)" : "onScroll($event)"
  },
  providers: [
      AnimationService
  ],
})

export class AppComponent implements OnInit{

  @ViewChildren('nav') navItems;

  @ViewChild('first') firstSection;
  @ViewChild('second') secondSection;

  _isMovingSection : boolean = false;
  _movingSectionDelay : number = 500;

  public onFirstAnim   = false;
  public onSecondAnim  = false;
  public onThirdAnim   = false;
  public onFourthAnim  = false;

  public currentFocusId : string = 'first';
  public focusOn : Object = {
    'first' : 1, 'second' : 2, 'third': 3, 'fourth' : 4, 'fifth' : 5, 'sixth' : 6
  };

  isMobile(){
    if(document.body.clientWidth < 800){
      // 모바일 기기
      if(document.body.clientWidth <= 480){
        return true;
      }
    }
    return false;
  }
  moveSection(e, prev, next){
    let moveToTop = e.deltaY > 0;

    if (this.isMobile()) return ;
    if(this._isMovingSection){
      return ;
    }

    if(moveToTop && next){
      next.toggle(moveToTop);
      this.currentFocusId = this.focusOn[next._el.nativeElement.id] + 1;
    }else if(!moveToTop && prev){
      prev.toggle(moveToTop);
      this.currentFocusId = this.focusOn[prev._el.nativeElement.id];
    }
    // 우측 네비게이터 업데이트
    this.updateNavigator(this.currentFocusId);

    this._isMovingSection = true;
    setTimeout(()=>{ this._isMovingSection = false; }, this._movingSectionDelay);
  }

  updateNavigator(focusId){
    this.navItems.forEach((item)=>{
        item.nativeElement.classList.remove('active');
        if(item.nativeElement.innerText == focusId){
          item.nativeElement.classList.add('active');
        }
    });
  }
  // mobile 전용
  onScroll(e){
    if(this.isMobile()){

      let currentScrollTop = document.body.scrollTop;
      console.log(currentScrollTop);
      if(currentScrollTop >= 50 && !this.onSecondAnim){
        this.onSecondAnim = true;
      }else if(currentScrollTop >= 670 && !this.onThirdAnim){
        this.onThirdAnim = true;
      }else if(currentScrollTop >= 1170 && !this.onFourthAnim){
        this.onFourthAnim = true;
      }
    }
  }

  ngOnInit(){

  }
}
