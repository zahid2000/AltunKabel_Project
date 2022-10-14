import { hardImageList } from './../../../models/hardImageList';
 
import { Component, OnInit } from '@angular/core'; 
import { fireImageList } from 'src/app/models/fireImageList';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fire-products',
  templateUrl: './fire-products.component.html',
  styleUrls: ['./fire-products.component.css']
  
})
export class FireProductsComponent implements OnInit {

products:Array<any>=new fireImageList().productlist;
faDownload=faDownload;
constructor() { 
    
  }

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
   
  
  } 
}