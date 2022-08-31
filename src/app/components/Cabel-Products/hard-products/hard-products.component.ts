import { Component, OnInit } from '@angular/core';
import { hardImageList } from 'src/app/models/hardImageList';

@Component({
  selector: 'app-hard-products',
  templateUrl: './hard-products.component.html',
  styleUrls: ['./hard-products.component.css']
})
export class HardProductsComponent implements OnInit {
  products:Array<any>=new hardImageList().productlist;

  constructor() { }

  ngOnInit(): void {
  }

}
