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
    {img: "assets/images/image8.png"},
    {img: "assets/images/image7.png"},
    {img: "assets/images/image6.png"},
    {img: "assets/images/image5.png"},
    {img: "assets/images/image4.png"},
    {img: "assets/images/image3.png"},
    {img: "assets/images/image2.png"},
    {img: "assets/images/image1.png"}
  ];
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
