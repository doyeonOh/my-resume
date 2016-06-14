import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { SkillsComponent } from './components/skills.component';

@Component({
  selector: 'my-app',
  template: `
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand" href="/">Resume</a>
          </div>
          <div >
            <ul class="navbar-text pull-right" style="float:left; margin: none; list-style:none;">
              <li><a [routerLink]="['Skills']">skills</a></li>
              <li><a>portpolio</a></li>
              <li><a>work experience</a></li>
              <li><a>education</a></li>
              <li><a>contact</a>  </li>
            </ul>
          </div>
      </div>
    </nav>
    <section class="content" style="margin-top: 55px;">
      <div class="container">
        <!-- main contents -->
        <router-outlet></router-outlet>
      </div>
    </section>
  `,
  directives: [
    ROUTER_DIRECTIVES
  ],
  styles: [`
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
    ul{
      float:left;
      margin: 0;
    }
    ul>li{
      float: left;
      display: block;
      position: relative;
    }

    ul>li>a{
      position: relative;
      display: block;
      padding: 10px 15px;
    }
  `]
})

@RouteConfig([
  { path: '/skills', name: 'Skills', component: SkillsComponent }
])

export class AppComponent{

}
