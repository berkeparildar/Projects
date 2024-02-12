import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Certificate {
  name: string;
  imagePath: string;
  url: string;
}

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})

export class CertificatesComponent {
  certificates: Certificate[] = [];
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get<Certificate[]>('assets/certificates.json').subscribe(data => {
      this.certificates = data;
    });
  }
}
