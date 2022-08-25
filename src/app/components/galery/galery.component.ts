import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css'],
})
export class GaleryComponent implements OnInit {
  breadcrumbitem = 'Qalereya';
   albums: Array <any>= [];

  constructor(private _lightbox: Lightbox,private _lightboxConfig: LightboxConfig) {
  
    _lightboxConfig.fadeDuration = 1;
    _lightboxConfig.fitImageInViewPort=true;
    _lightboxConfig.showZoom=true;
    _lightboxConfig.showDownloadButton=true;
  }
  
  ngOnInit(): void {}
  visiableLightbox: boolean = false;
  currentIndex: number = 0;
  currentObj = [];

  title = 'app';

  _albums:Array<any>= [
    {
      src: 'assets/images/1.jpg',
      caption: '',
      thumb: 'assets/images/1.jpg',
    },
    {
      src: 'assets/images/2altun.PNG',
      thumb: 'assets/images/2altun.PNG',
      caption: '',
    },
    {
      src: 'assets/images/banner1.jpg',
      thumb: 'assets/images/banner1.jpg',
      caption: '',
    },
    {
      src: 'assets/images/banner2.jpg',
      thumb: 'assets/images/banner2.jpg',
      caption: '',
    },
    {
      src: 'assets/images/1altun.png',
      thumb: 'assets/images/1altun.png',
      caption: '',
    },
    {
      src: 'assets/images/alçaq gərginlikli kabel.jpg',
      thumb: 'assets/images/alçaq gərginlikli kabel.jpg',
      caption: '',
    },
    {
      src: 'assets/images/banner3.jpg',
      thumb: 'assets/images/banner3.jpg',
      caption: '',
    },
    {
      src: 'assets/images/banner4.jpg',
      thumb: 'assets/images/banner4.jpg',
      caption: '',
    },
    {
      src: 'assets/images/banner5.jpg',
      thumb: 'assets/images/banner5.jpg',
      caption: '',
    },
    {
      src: 'assets/images/banner6.jpg',
      thumb: 'assets/images/banner6.jpg',
      caption: '',
    },
    {
      src: 'assets/images/banner7.jpg',
      thumb: 'assets/images/banner7.jpg',
      caption: '',
    },
    {
      src: 'assets/images/banner8.jpg',
      thumb: 'assets/images/banner8.jpg',
      caption: '',
    },
    {
      src: 'assets/images/fire_servival3.jpg',
      thumb: 'assets/images/fire_servival3.jpg',
      caption: '',
    },
  ];

  showLightbox(object: any, index: any) {
    this.currentIndex = index;
    this.currentObj = object;
    console.log('=>', this.currentObj, this.currentIndex);
    this.visiableLightbox = true;
  }

  closeHandler() {
    this.visiableLightbox = false;
    this.currentIndex = -1;
  }
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index, { wrapAround: true, showImageNumberLabel: true });
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
