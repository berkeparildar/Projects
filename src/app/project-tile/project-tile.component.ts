// project-tile.component.ts
import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProjectViewComponent } from '../project-view/project-view.component';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.css']
})
export class ProjectTileComponent {
  @Input() title!: string;
  @Input() repoLink!: string;
  @Input() imageUrl!: string;
  @Input() description!: string;
  @Input() titleOne!: string;
  @Input() partOne!: string;
  @Input() titleTwo!: string;
  @Input() partTwo!: string;
  @Input() videoId!: string;
  @Input() imageOnePath!: string;
  @Input() imageTwoPath!: string;
  @Input() imageThreePath!: string;
  @Input() hasVideo!: boolean;
  @Input() tagCount!: number;
  @Input() tags!: string[];

  constructor(private dialog: MatDialog) { }

  openProjectView(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      projectTitle: this.title,
      repoLink: this.repoLink,
      projectDescription: this.description,
      youtubeVideoUrl: this.videoId,
      partOneTitle: this.titleOne,
      partOneText: this.partOne,
      partTwoTitle: this.titleTwo,
      partTwoText: this.partTwo,
      imageOnePath: this.imageOnePath,
      imageTwoPath: this.imageTwoPath,
      imageThreePath: this.imageThreePath,
      hasVideo: this.hasVideo,
    };
    dialogConfig.panelClass = 'custom-container';
    dialogConfig.backdropClass = 'custom-modal';
    const dialogRef = this.dialog.open(ProjectViewComponent, dialogConfig);
  }
  Tag(tag: string): string {
    if (tag == "C_"){
      return  "C#";
    }
    return tag;
  }

  CoreTag(tag: string): string {
    if (tag == "ASP.NET Core"){
      return  "ASP";
    }
    return tag;
  }
}
