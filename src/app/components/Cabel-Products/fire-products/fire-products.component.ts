import { hardImageList } from './../../../models/hardImageList';
 
import { Component, OnInit } from '@angular/core'; 
import { fireImageList } from 'src/app/models/fireImageList';

@Component({
  selector: 'app-fire-products',
  templateUrl: './fire-products.component.html',
  styleUrls: ['./fire-products.component.scss']
  
})
export class FireProductsComponent implements OnInit {

products:Array<any>=new fireImageList().productlist;

constructor() { 
    
  }

  ngOnInit(): void {
   
   
  
  } 
}