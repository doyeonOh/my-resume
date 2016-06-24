import { Component, ViewChildren, Input, AfterViewInit, OnChanges } from 'angular2/core';

import { TranslateElement } from '../directives/translate-element';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'me',
  templateUrl: 'app/templates/me.component.html',
  styleUrls: ['app/css/me.component.css'],
  directives: [ TranslateElement ]
})

export class MeComponent implements AfterViewInit, OnChanges{
  @Input() id : string;
  @Input() currentFocusId : string;
  // @Input() onAnim : boolean;

  @ViewChildren('item') items;

  constructor(
    private _anim : AnimationService
  ) {}

  ngOnChanges(){
  }

  ngAfterViewInit(){
    this.items.forEach((item, index)=>{
      let el = item.nativeElement;
      this._anim.smoothAnimation(el, 300 * ( index + 1 ));
    });
  }
}
