import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logo-carousel',
  templateUrl: './logo-carousel.component.html',
  styleUrls: ['./logo-carousel.component.css']
})
export class LogoCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  slides = [
    {img: "assets/images/FooterSlider/ElSeym.png"},
    {img: "assets/images/FooterSlider/Fabjpg.jpg"},
    {img: "assets/images/FooterSlider/Gilan.jpg"},
    {img: "assets/images/FooterSlider/GMConstruction.svg"},
    {img: "assets/images/FooterSlider/Omid.jpg"},
    {img: "assets/images/FooterSlider/PMD.jpg"},
    {img: "assets/images/FooterSlider/Sans.jpg"},
  ]
  slideConfig = {"slidesToShow": 5, "slidesToScroll": 1,autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  dots: true,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
      },
    {
  breakpoint: 768,
  settings: {
    slidesToShow: 3
  }
  }, {
  breakpoint: 665,
  settings: {
    slidesToShow: 2
  }
  }]};
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e:any) { 
  }
  
  breakpoint(e:any) { 
  }
  
  afterChange(e:any) { 
  }
  
  beforeChange(e:any) { 
  }
}
