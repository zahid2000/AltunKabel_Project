 
import { Component, OnInit } from '@angular/core'; 
import { fireImageList } from 'src/app/models/fireImageList';

@Component({
  selector: 'app-fire-products',
  templateUrl: './fire-products.component.html',
  styleUrls: ['./fire-products.component.scss']
  
})
export class FireProductsComponent implements OnInit {
images:Array<any>=new fireImageList().images
files:any 
constructor() { 
    
  }

  ngOnInit(): void {
    console.warn(this.images)
   
  
  } 
}