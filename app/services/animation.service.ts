import { Injectable } from 'angular2/core';

@Injectable()
export class AnimationService{

  // angular2 의 animation 이 정상동작하지 않음( angualr2 rc-2 에서 animation 개편됨)
  // 따라서 class 를 이용해서 간단하게 처리
  smoothAnimation(el, duration){
    el.classList.remove("animation_active");
    el.classList.add("animation_enter");
    setTimeout(()=>{el.classList.add("animation_active")}, duration)
  }
}
