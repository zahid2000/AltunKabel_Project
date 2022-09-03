import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ImageList } from 'src/app/models/imageList';
import { Item } from 'src/app/models/Item';
import { animate, style, transition, trigger } from '@angular/animations';
import { SertificatesList } from 'src/app/models/sertificateList';
@Component({
  selector: 'app-sertificates',
  templateUrl: './sertificates.component.html',
  styleUrls: ['./sertificates.component.scss'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ transform: 'scale(0.5)' }),
        animate('150ms', style({ transform: 'scale(1)' })),
      ]),
      transition('visible => void', [
        style({ transform: 'scale(1)' }),
        animate('150ms', style({ transform: 'scale(0.5)' })),
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('50ms', style({ opacity: 0.8 })),
      ]),
    ]),
  ],
})
export class SertificatesComponent implements OnInit {

  breadcrumbitem = 'Sertifikatlar';
  imageList: Array<any> =new SertificatesList().sertificates;
  showCount = true;

  previewImage = false;
  showMask = false;
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;
  //icon
  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {
    this.totalImageCount = this.imageList.length;
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
  }

 

  currentLightboxImage: Item = this.imageList[0];

  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.imageList[index];
  }

  onAnimationEnd(event: any) {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }

  onClosePreview() {
    this.previewImage = false;
  }

  next(): void {
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex > this.imageList.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.imageList[this.currentIndex];
  }

  prev(): void {
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.imageList.length - 1;
    }
    this.currentLightboxImage = this.imageList[this.currentIndex];
  }
}
