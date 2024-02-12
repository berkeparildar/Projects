import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
@Component({
  selector: 'app-cv-view',
  templateUrl: './cv-view.component.html',
  styleUrls: ['./cv-view.component.css']
})
export class CvViewComponent implements OnInit {
  cvPdfUrl: string = 'src/assets/cv.pdf';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {
    this.cvPdfUrl = this.data.cvPdfUrl;
  }
}
