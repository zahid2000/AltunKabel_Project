import { hardImageList } from './../../../models/hardImageList';
import { fireImageList } from './../../../models/fireImageList';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { ImageList } from 'src/app/models/imageList';
import { Item } from 'src/app/models/Item';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  
})
export class ProductsComponent implements OnInit {
  breadcrumbitem="Məhsullar"
  imageListForFire: Array<any> ;
  imageListForHart: Array<any> ;
  faDownload=faDownload;
  
  constructor() {}

  ngOnInit(): void {
      let _fireImageList =new fireImageList();
      let _hardImageList =new hardImageList();
      this.imageListForFire=_fireImageList.productlist;
      this.imageListForHart=_hardImageList.productlist;
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
  });
  }

 

  

}
