import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {
  safeURL!: SafeResourceUrl;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private sanitizer: DomSanitizer
  ) {
    console.log(data.repoLink)
  }
  ngOnInit() {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.youtubeVideoUrl);
  }
  get projectTitle(): string {
    return this.data.projectTitle;
  }
  get repoLink(): string {
    return this.data.repoLink;
  }
  get projectDescription(): string {
    return this.data.projectDescription;
  }
  get youtubeVideoUrl(): string {
    return this.data.youtubeVideoUrl;
  }
  get partOneTitle(): string {
    return this.data.partOneTitle;
  }
  get partOneList(): string[] {
    return this.data.partOneText.split('_');
  }
  get partTwoTitle(): string {
    return this.data.partTwoTitle;
  }
  get partTwoList(): string[] {
    return this.data.partTwoText.split('_');
  }
  get imageOnePath(): string {
    return this.data.imageOnePath;
  }
  get imageTwoPath(): string {
    return this.data.imageTwoPath;
  }
  get imageThreePath(): string {
    return this.data.imageThreePath;
  }
  get hasVideo(): boolean {
    return this.data.hasVideo;
  }
  get hasStore(): boolean {
    return this.data.hasStore;
  }
  get storeUrl(): string {
    return this.data.storeUrl;
  }
}
