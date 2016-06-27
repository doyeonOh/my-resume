import { Component, ViewChildren, ViewChild } from 'angular2/core';
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

export class AppComponent {

  @ViewChildren('nav') navItems;

  _canMoveSection : boolean = true;
  _moveSectionDelay : number = 600;
  _focusOn : Object = {
    'first' : 1, 'second' : 2, 'third': 3, 'fourth' : 4
  };

  public displaySecondAnim  = false;
  public displayThirdAnim   = false;
  public displayFourthAnim  = false;

  public currentFocusId : string = 'first';

  isMobile(){
    if(document.body.clientWidth < 800){
      // 모바일 기기
      if(document.body.clientWidth <= 480){
        return true;
      }
      // 태블릿
    }
    return false;
  }

  moveSection(e, prev, next){
    let moveToTop = e.deltaY > 0;

    if(this.isMobile() || this._canMoveSection == false) return ;

    if(moveToTop && next){
      next.toggle(moveToTop);
      this.currentFocusId = this._focusOn[next._el.nativeElement.id] + 1;
    }else if(!moveToTop && prev){
      prev.toggle(moveToTop);
      this.currentFocusId = this._focusOn[prev._el.nativeElement.id];
    }
    // 우측 네비게이터 업데이트
    this.updateNavigator(this.currentFocusId);

    this._canMoveSection = false;
    setTimeout(()=>{ this._canMoveSection = true; }, this._moveSectionDelay);
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

      if(currentScrollTop >= 50 && !this.displaySecondAnim){
        this.displaySecondAnim = true;
      }else if(currentScrollTop >= 670 && !this.displayThirdAnim){
        this.displayThirdAnim = true;
      }else if(currentScrollTop >= 1170 && !this.displayFourthAnim){
        this.displayFourthAnim = true;
      }
    }
  }
}
