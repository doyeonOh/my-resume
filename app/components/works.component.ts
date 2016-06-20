import { Component, Input, OnChanges } from 'angular2/core';

@Component({
  selector: 'works',
  template: `
    <div style="position:absolute;top:30%;left:40%">
      <div style="position:relative; width:60%;float:left;">
        <h2 style="display:block; position:relative;margin-bottom:1em;">
          근무 이력
        </h2>
        <div style="position:relative;width:90%;">
          <h3 style="display:block; line-height:1.5; ">
            <p style="display:inline;"><b>웹케시</b> <span style="font-size:0.5em;;text-align:right;">2013.1 ~ 2015.10 (2년 10개월)</span></p>
            <br>
            <h5>WEB DEVELOPER</h5>
          </h3>
          <p style="margin-top:2em;">
            유치원 통합 업무 서비스인 <b>아이모아 서비스</b>와 재무회계 서비스인 <b>Sbook 프로젝트</b>를 진행하였습니다.
          </p>
          <p>
            - Java, Jsp/Servlet, Javascript 이용한 웹 페이지 개발
            <br>
            - DDL, DML 사용 및 프로시져 구현 (PostgreSQL)
            <br>
            - User interaction 을 위한 모듈 구현(jQuery)
            <br>
            - 사내 여러 서비스 팀과 API 연계를 통한 협업
          </p>
          <p style="background: #fff">
            |
            <a target="_blank" href="https://www.imore.co.kr/">아이모아 서비스</a>,
            <a target="_blank" href="https://www.bizplay.co.kr/main_0001_04.act">sbook 서비스(s재무회계)</a>
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`

  `],
  directives: []
})

export class WorksComponent implements OnChanges{
  @Input() id : string;
  @Input() currentFocusId: string;

  ngOnChanges(){
    if(this.currentFocusId === this.id){
      console.log(this.currentFocusId);
    }
  }
}
