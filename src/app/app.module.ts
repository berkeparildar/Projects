import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticleBackgroundComponent } from './particle-background/particle-background.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { Routes, RouterModule } from '@angular/router';
import { CvViewComponent } from './cv-view/cv-view.component';
import {HttpClientModule} from "@angular/common/http";
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectTileComponent } from './project-tile/project-tile.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { CertificateTileComponent } from './certificate-tile/certificate-tile.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CertificateTileComponent,
    ContactComponent,
    CertificatesComponent,
    ParticleBackgroundComponent,
    ProjectTileComponent,
    MainPageComponent,
    HeaderComponent,
    ProjectsComponent,
    ProjectViewComponent,
    CvViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
