import { Component } from 'angular2/core';

@Component({
  selector: 'my-skills',
  template: `
    <div>
      <p class="my-name">오 도 연</p>
      <p>Web Developer</p>
    </div>

    <div>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </div>
  `,
  styles: [`
    .my-name{
      font-size:4em;
    }
  `]
})

export class SkillsComponent {

}
