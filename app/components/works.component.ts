import { Component, ViewChildren, Input, OnChanges } from 'angular2/core';

import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'works',
  templateUrl: 'app/templates/works.component.html',
  styleUrls: ['app/css/works.component.css'],
  directives: []
})

export class WorksComponent implements OnChanges{
  @Input() id : string;
  @Input() currentFocusId: string;
  @Input() onAnim : boolean;

  @ViewChildren('item') items;

  _displayed : boolean = false;

  constructor(
    private _anim: AnimationService
  ) {}

  ngOnChanges(){
    if(this.onAnim || this.currentFocusId === this.id){
      if(this._displayed == false){
        this.items.forEach((item, index)=>{
          let el = item.nativeElement;
          this._anim.smoothAnimation(el, 300 * ( index + 1 ));
        });
        this._displayed = true;
      }
    }
  }
}
