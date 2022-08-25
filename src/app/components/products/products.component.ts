import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/models/Item';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  
})
export class ProductsComponent implements OnInit {
  breadcrumbitem="Məhsullar"
  imageListForFire: Array<any> = environment.imageList;
  imageListForHart: Array<any> = environment.imageList;
  
  constructor() {}

  ngOnInit(): void {
     
  }

 

  

}
