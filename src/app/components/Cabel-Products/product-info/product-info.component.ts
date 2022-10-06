import { ActivatedRoute } from '@angular/router';
import { fireImageList } from 'src/app/models/fireImageList';
import { hardImageList } from './../../../models/hardImageList';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {
  productInfo: any;
  hardProducts: Array<any> = new hardImageList().productlist;
  fireProducts: Array<any> = new fireImageList().productlist;
  prStandartImg:string= '../../../../assets/product-images/azs.png';
  constructor(private activatedRoue: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoue.params.subscribe((params) => {
      if (params['type']) {
        if (params['type'] == 1) {
          this.productInfo = this.fireProducts[params['index']];
        } else if (params['type'] == 2) {
          this.productInfo = this.hardProducts[params['index']];
        }
      }
    });
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
