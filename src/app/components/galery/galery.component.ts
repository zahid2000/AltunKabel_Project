import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';
interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({transform: 'scale(0.5)'}),
        animate('150ms', style({transform: 'scale(1)'}))
      ]),
      transition('visible => void', [
        style({transform: 'scale(1)'}),
        animate('150ms', style({transform: 'scale(0.5)'}))
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({opacity: 1}),
        animate('50ms', style({opacity: 0.8}))
      ])
    ])
  ]
})
export class GaleryComponent implements OnInit {
  breadcrumbitem = 'Qalereya';
   albums: Array <any>= [];
   @Input() galleryData: Item[] = [];
   @Input() showCount = false;
 
   previewImage = false;
   showMask = false;
   currentLightboxImage: Item = this.galleryData[0];
   currentIndex = 0;
   controls = true;
   totalImageCount = 0;
   //icon
   faTimes=faTimes
  constructor() {
  
   
  }
  
  ngOnInit(): void {
    this.totalImageCount = this.galleryData.length;
  }
  

  _albums:Array<any>= [
    {
      imageSrc: 'assets/images/1.jpg',
      caption: '',
      thumb: 'assets/images/1.jpg',
    },
    {
      imageSrc: 'assets/images/2altun.PNG',
      thumb: 'assets/images/2altun.PNG',
      caption: '',
    },
    {
      imageSrc: 'assets/images/banner1.jpg',
      thumb: 'assets/images/banner1.jpg',
      caption: '',
    },
    {
      imageSrc: 'assets/images/banner2.jpg',
      thumb: 'assets/images/banner2.jpg',
      caption: '',
    },
    {
      imageSrc: 'assets/images/1altun.png',
      thumb: 'assets/images/1altun.png',
      caption: '',
    },
    {
      imageSrc: 'assets/images/alçaq gərginlikli kabel.jpg',
      thumb: 'assets/images/alçaq gərginlikli kabel.jpg',
      caption: '',
    },
    {
      imageSrc: 'assets/images/banner3.jpg',
      thumb: 'assets/images/banner3.jpg',
      caption: '',
    },
    {
      imageSrc: 'assets/images/banner4.jpg',
      thumb: 'assets/images/banner4.jpg',
      caption: '',
    },
    {
      imageSrc: 'assets/images/banner5.jpg',
      thumb: 'assets/images/banner5.jpg',
      caption: '',
    },
    {
      imageSrc: 'assets/images/banner6.jpg',
      thumb: 'assets/images/banner6.jpg',
      caption: '',
    },
    {
      imageSrc: 'assets/images/banner7.jpg',
      thumb: 'assets/images/banner7.jpg',
      caption: '',
    },
    {
      imageSrc: 'assets/images/banner8.jpg',
      thumb: 'assets/images/banner8.jpg',
      caption: '',
    },
    {
      imageSrc: 'assets/images/fire_servival3.jpg',
      thumb: 'assets/images/fire_servival3.jpg',
      caption: '',
    },
  ];

  
  
  
  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this._albums[index];
  }

  onAnimationEnd(event: any) {
    if(event.toState === 'void') {
      this.showMask = false;
    }
  }

  onClosePreview() {
    this.previewImage = false;
  }

  next(): void {
    this.currentIndex = this.currentIndex + 1;
    if(this.currentIndex > this._albums.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this._albums[this.currentIndex];
  }

  prev(): void {
    this.currentIndex = this.currentIndex - 1;
    if(this.currentIndex < 0) {
      this.currentIndex = this._albums.length - 1;
    }
    this.currentLightboxImage = this._albums[this.currentIndex];
  }
}
