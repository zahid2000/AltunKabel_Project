import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
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
  
  constructor() {}

  ngOnInit(): void {
      let imageList =new ImageList();
      this.imageListForFire=imageList.products;
      this.imageListForHart=imageList.products;
  }

 

  

}
