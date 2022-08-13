import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {
  breadcrumbitem="Qalereya"
  constructor() { }
imgUrls=['1.jpg','1altun.png','2altun.PNG','banner1.jpg','banner2.jpg','banner3.jpg','banner4.jpg','banner6.jpg','fire_servival3.jpg','lv_power_cables3.jpg',]
  ngOnInit(): void {
  }
  visiableLightbox: boolean = false;
  currentIndex: number = 0;
  currentObj = [];

  title = 'app';

  imageObject1 = [{
      image: 'assets/images/1.jpg',
      thumbImage: 'assets/images/1.jpg',

  }, {
    image: 'assets/images/2altun.PNG',
    thumbImage: 'assets/images/2altun.PNG',

  }, {
    image: 'assets/images/banner1.jpg',
    thumbImage: 'assets/images/banner1.jpg',
  }, {
    image: 'assets/images/banner2.jpg',
    thumbImage: 'assets/images/banner2.jpg',
  }
  , {
    image: 'assets/images/1altun.png',
    thumbImage: 'assets/images/1altun.png',
  }
  , {
    image: 'assets/images/alçaq gərginlikli kabel.jpg',
    thumbImage: 'assets/images/alçaq gərginlikli kabel.jpg',
  }
  , {
    image: 'assets/images/banner3.jpg',
    thumbImage: 'assets/images/banner3.jpg',
  }
  , {
    image: 'assets/images/banner4.jpg',
    thumbImage: 'assets/images/banner4.jpg',
  }
  , {
    image: 'assets/images/banner5.jpg',
    thumbImage: 'assets/images/banner5.jpg',
  } , {
    image: 'assets/images/banner6.jpg',
    thumbImage: 'assets/images/banner6.jpg',
  } , {
    image: 'assets/images/banner7.jpg',
    thumbImage: 'assets/images/banner7.jpg',
  } , {
    image: 'assets/images/banner8.jpg',
    thumbImage: 'assets/images/banner8.jpg',
  } , {
    image: 'assets/images/fire_servival3.jpg',
    thumbImage: 'assets/images/fire_servival3.jpg',
  }


];

  showLightbox(object:any, index:any) {
      this.currentIndex = index;
      this.currentObj = object;
      console.log('=>', this.currentObj, this.currentIndex)
      this.visiableLightbox = true;
  }

  closeHandler() {
      this.visiableLightbox = false;
      this.currentIndex = -1;
  }
}
