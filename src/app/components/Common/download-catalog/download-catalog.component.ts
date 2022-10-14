import { Component, OnInit } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-download-catalog',
  templateUrl: './download-catalog.component.html',
  styleUrls: ['./download-catalog.component.css']
})
export class DownloadCatalogComponent implements OnInit {

  constructor() { }
  faDownload=faDownload;
  ngOnInit(): void {
  }

}
