import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  constructor() { }
imgUrls=['1.jpg','1altun.png','2altun.PNG','banner1.jpg','banner2.jpg','banner3.jpg','banner4.jpg','banner6.jpg','fire_servival3.jpg','lv_power_cables3.jpg',]
  ngOnInit(): void {
  }

}
