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

  // public slides: Array<Object> = [
  //   { "image": "https://www.lalapixthailand.com/wp-content/uploads/2018/04/Home-Banner_Web_2.jpg" },
  //   { "image": "https://www.lalapixthailand.com/wp-content/uploads/2018/04/Home-Banner_Web_1_V2.jpg" },
  //   { "image": "https://www.lalapixthailand.com/wp-content/uploads/2018/05/BANNER_Promotion_May-01.jpg" },
  //   { "image": "https://www.lalapixthailand.com/wp-content/uploads/2018/05/BANNER_Promotion_May_50_edit-01.jpg"}
  // ];
  public slides: Array<Object> = [
    // { "image": "../assets/images/banner/BANNER_Promotion_1.png" },
    { "image": "../assets/images/banner/Home-Banner_Web_2.png" },
    { "image": "../assets/images/banner/Home-Banner_Web_3.png" },
    { "image": "../assets/images/banner/Home-Banner_Web_4.png"}
  ];
}
