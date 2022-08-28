import { ActivatedRoute } from '@angular/router';
import { fireImageList } from 'src/app/models/fireImageList';
import { hardImageList } from './../../../models/hardImageList';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
 productInfo:any
hardProducts:Array<any>= new hardImageList().productlist
fireProducts:Array<any>= new fireImageList().productlist
  constructor(private  activatedRoue:ActivatedRoute) { }

  ngOnInit(): void {
   this.activatedRoue.params.subscribe((params)=>{
    let id=params['index']
    let type=params['type']

    if(type){
      if(type==1){
        this.productInfo=this.fireProducts[id]
        console.log(this.fireProducts[id])
      }
      else if(params['type']==2){
        this.productInfo=this.hardProducts[params['index']]

      }
    }
   })
  }

}
