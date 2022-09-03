import { ImageList } from './../../models/imageList';
import { Component, OnInit } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { SliderImagesList } from 'src/app/models/sliderImageList';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  faFacebookF=faFacebookF
  sliderImagesList:Array<any>
  constructor() { }

  ngOnInit(): void {
    this.sliderImagesList=new SliderImagesList().imagesList
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
  }

}
