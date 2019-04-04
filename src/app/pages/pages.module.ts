import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaitComponent } from '../shared/componentens/wait/wait.component';
import { HomeComponent } from './sleeve/home/home.component';
import { AboutComponent } from './sleeve/about/about.component';
import { NewsComponent } from './sleeve/news/news.component';
import { ContactUsComponent } from './sleeve/contact-us/contact-us.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations: [
    WaitComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    ContactUsComponent,
    PagesComponent
  ],
  exports: [
    WaitComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    ContactUsComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
