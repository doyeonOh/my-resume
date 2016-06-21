import { Component, ViewChildren,  Input, OnChanges } from 'angular2/core';

import { ImageZoomElement } from '../directives/image-zoom-element';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'portpolio',
  template: `
      <div style="position:absolute; top:23%;left:26%;">
        <h2 class="portpolio-title" >
          포트폴리오
        </h2>
        <div class="portpolio-content" #portpoilo_item>
          <div class="portpoilo-item" >
            <div class="card" >
              <div class="card-image waves-block waves-light" style="cursor:pointer;">
                <img img-zoom-element src="resources/img/portpolio/settle2.png">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Sbook 재무회계 서비스<i class="material-icons right">more_vert</i></span>
                <p><a target="_blank" href="https://www.bizplay.co.kr/main_0001_04.act">사이트로 이동</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Sbook 재무회계 서비스<i class="material-icons right">close</i></span>
                <div class="grey-text text-darken-4" style="line-height: 1.4;">
                  <p style="text-align:right;">2014.1 ~ 2015.9</p>
                  <p><b>개요</b></p>
                  회계 전문인력이 없어도 증빙의 자동전표화로 분개장에서 결산 그리고 부가세 신고까지 원스톱으로 진행되는 차별화된 중소기업 맞춤형 회계 App 입니다.<br><br>
                  <p><b>역할</b></p>
                  <ul>
                    <li>- 외부 API 연계 및 회계 기초정보와 결산 로직 구현</li>
                    <li>- App 전반에 회계 업무자를 위한 유저 인터랙션 구현</li>
                    <li>- 로그 분석을 위한 ELK 스택 구축</li>
                    <li>- MyBuilder 를 이용한 인쇄물 개발</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="portpoilo-item">
            <div class="card">
              <div class="card-image waves-block waves-light" style="cursor:pointer;">
                <img img-zoom-element src="resources/img/portpolio/imore3.png">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">아이모아 서비스<i class="material-icons right">more_vert</i></span>
                <p><a target="_blank" href="https://www.imore.co.kr/">사이트로 이동</a></p>
              </div>

              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">아이모아 서비스<i class="material-icons right">close</i></span>
                <div class="grey-text text-darken-4" style="line-height: 1.4;">
                  <p style="text-align:right;">2013.1 ~ 2013.12</p>
                  <p><b>개요</b></p>
                  아이모아는 유치원을 위한 회계, 원아, 금융 등의 복잡한 업무를 효율적으로 관리 ​할 수 있게 제공하는 서비스입니다.<br><br>
                  <p><b>역할</b></p>
                  <ul>
                    <li>- 회계장부, 금융관리, 청구수납 메뉴 유지보수</li>
                    <li>- 금융결제원 CMS 및 현금출납부 2차 고도화 개발</li>
                    <li>- legacy 코드 모듈화</li>
                    <li>- OzReport 를 이용한 인쇄물 개발</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="portpolio-item" style="text-align: right;margin-right: 1em;">
            <input class="btn btn-danger" type="button" value="그 외..(업데이트 예정)" onClick="window.open('http://ody12.tistory.com/category/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4','_blank');" />
          </div>
        </div>
      </div>
  `,
  styles: [`
    .portpolio-title{
      position:relative;display:block;
    }

    .portpolio-content{
      margin-top:2em;float:left;
    }

    .portpoilo-item{
      position:relative; padding-right:1em;width:30em;float:left;
    }
  `],
  directives: [ ImageZoomElement ]
})
export class PortpolioComponent implements OnChanges{
  @Input() id : string;
  @Input() currentFocusId : string;

  @ViewChildren('portpoilo_item') items;

  runAnimation : boolean = false;
  constructor(
    private _anim: AnimationService
  ) {}

  ngOnChanges(){
    if(this.currentFocusId === this.id && !this.runAnimation){
      let count = 0;
      this.items.forEach((item)=>{
        count++;
        let el = item.nativeElement;
        this._anim.smoothAnimation(el, 300 * count);
      });
      this.runAnimation = true;
    }
  }
}
