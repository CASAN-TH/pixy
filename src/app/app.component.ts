import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public myInterval: number = 3000;
  public activeSlideIndex: number = 0;
  public noWrapSlides: boolean = false;

  activeSlideChange() {
    console.log(this.activeSlideIndex);
  }

  public slides: Array<Object> = [
    { "image": "https://mdbootstrap.com/img/Photos/Slides/img%20(18).jpg" },
    { "image": "https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg" },
    { "image": "https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg" },
  ];
}
