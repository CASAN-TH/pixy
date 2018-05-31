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

  public opened: boolean = false;
 
  public toggleSidebar() {
    this.opened = !this.opened;
    console.log(this.opened);
    
  }

  // activeSlideChange() {
  //   console.log(this.activeSlideIndex);
  // }


  public slides: Array<Object> = [
    { "image": "../assets/images/banner/Home-Banner_Web_2.png" },
    { "image": "../assets/images/banner/Home-Banner_Web_3.png" },
    { "image": "../assets/images/banner/Home-Banner_Web_4.png" }
  ];

  public products: Array<Object> = [
    { "name": "CALENDARS", "description": "No photo? No problem! Create unique, custom gifts without photos, too! Choose from plenty of designs to express your style.", "image": "../assets/images/products/Calendars.jpg" },
    { "name": "CARDS", "description": "No photo? No problem! Create unique, custom gifts without photos, too! Choose from plenty of designs to express your style.", "image": "../assets/images/products/Cards.jpg" },
    { "name": "DIGITAL OFFSET PRINT", "description": "No photo? No problem! Create unique, custom gifts without photos, too! Choose from plenty of designs to express your style.", "image": "../assets/images/products/DigitalPrints.jpg" },
    { "name": "FRAMES", "description": "No photo? No problem! Create unique, custom gifts without photos, too! Choose from plenty of designs to express your style.", "image": "../assets/images/products/frames.jpg" },
    { "name": "GIFTS", "description": "No photo? No problem! Create unique, custom gifts without photos, too! Choose from plenty of designs to express your style.", "image": "../assets/images/products/Gifts.jpg" },
    { "name": "PHOTOBOOKS", "description": "No photo? No problem! Create unique, custom gifts without photos, too! Choose from plenty of designs to express your style.", "image": "../assets/images/products/Photobooks.jpg" },
    { "name": "PRINTS", "description": "No photo? No problem! Create unique, custom gifts without photos, too! Choose from plenty of designs to express your style.", "image": "../assets/images/products/Prints.jpg" },
    { "name": "PROMOTIONS", "description": "No photo? No problem! Create unique, custom gifts without photos, too! Choose from plenty of designs to express your style.", "image": "../assets/images/products/Promotion.jpg" }
  ];

  public news: Array<Object> = [
    {
      "index": 1, "items": [
        { "name": "CALENDARS", "description": "No photo? No problem! Create unique, custom gifts without photos, too! Choose from plenty of designs to express your style.", "image": "../assets/images/whatsnew/whatsnew_1.png" },
        { "name": "CARDS", "description": "No photo? No problem! Create unique, custom gifts without photos, too! Choose from plenty of designs to express your style.", "image": "../assets/images/whatsnew/whatsnew_2.png" },
        { "name": "DIGITAL OFFSET PRINT", "description": "No photo? No problem! Create unique, custom gifts without photos, too! Choose from plenty of designs to express your style.", "image": "../assets/images/whatsnew/whatsnew_3.png" }
      ]
    },
    {
      "index": 2, "items": [
        { "name": "FRAMES", "description": "No photo? No problem! Create unique, custom gifts without photos, too! Choose from plenty of designs to express your style.", "image": "../assets/images/whatsnew/whatsnew_2.png" },
        { "name": "GIFTS", "description": "No photo? No problem! Create unique, custom gifts without photos, too! Choose from plenty of designs to express your style.", "image": "../assets/images/whatsnew/whatsnew_1.png" },
        { "name": "PHOTOBOOKS", "description": "No photo? No problem! Create unique, custom gifts without photos, too! Choose from plenty of designs to express your style.", "image": "../assets/images/whatsnew/whatsnew_3.png" },
      ]
    }];

    public customers: Array<Object> = [
      {
        "index": 1, "items": [
          { "image": "../assets/images/customers/logo-Ais.png" },
          { "image": "../assets/images/customers/logo-fwd.png" },
          { "image": "../assets/images/customers/logo-Isuzu.png" },
          { "image": "../assets/images/customers/logo-major.png" },
        ]
      },
      {
        "index": 2, "items": [
          { "image": "../assets/images/customers/logo-pasaya.png" },
          { "image": "../assets/images/customers/logo-ptt.png" },
          { "image": "../assets/images/customers/logo-samsung.png" },
          { "image": "../assets/images/customers/logo-SB.png" },
        ]
      },
      {
        "index": 3, "items": [
          { "image": "../assets/images/customers/logo-SCG.png" },
          { "image": "../assets/images/customers/logo-thaiairway.png" },
          { "image": "../assets/images/customers/logo-toyota.png" },
          { "image": "../assets/images/customers/logo-scotch.png" },
        ]
      }
    ];
}
