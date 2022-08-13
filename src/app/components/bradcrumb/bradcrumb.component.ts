import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bradcrumb',
  templateUrl: './bradcrumb.component.html',
  styleUrls: ['./bradcrumb.component.css']
})
export class BradcrumbComponent implements OnInit {

  constructor() { }

 @Input() item:string
  ngOnInit(): void {
  }

}
