import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certificate-tile',
  templateUrl: './certificate-tile.component.html',
  styleUrls: ['./certificate-tile.component.css']
})
export class CertificateTileComponent {
  @Input() name!: string;
  @Input() imagePath!: string;
  @Input() url!: string;
}
