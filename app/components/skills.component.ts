import { Component, ViewChildren, OnInit, Input, OnChanges } from 'angular2/core';


import { TranslateElement } from '../directives/translate-element';
import { AnimationService } from '../services/animation.service';


@Component({
  selector: 'skills',
  templateUrl: 'app/templates/skills.component.html',
  styleUrls: ['app/css/skills.component.css'],
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
