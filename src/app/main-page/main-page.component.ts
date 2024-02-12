import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {CvViewComponent} from "../cv-view/cv-view.component";
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(private dialog: MatDialog) {}
  openCvModal(): void {
    const dialogConfig = {
      data: {
        cvPdfUrl: 'src/assets/cv.pdf' // Replace with the actual URL of your CV PDF
      },
      panelClass: 'custom-container',
      backdropClass: 'custom-modal'
    };
    this.dialog.open(CvViewComponent, dialogConfig);
  }
}
