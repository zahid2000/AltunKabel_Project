import { Component, OnInit } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { hardImageList } from 'src/app/models/hardImageList';

@Component({
  selector: 'app-hard-products',
  templateUrl: './hard-products.component.html',
  styleUrls: ['./hard-products.component.css']
})
export class HardProductsComponent implements OnInit {
  products:Array<any>=new hardImageList().productlist;
  faDownload=faDownload;
  constructor() { }

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

}
