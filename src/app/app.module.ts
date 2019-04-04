import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot({
      bgsColor: "#00ACC1",
      bgsOpacity: 0.5,
      bgsPosition: "bottom-right",
      bgsSize: 60,
      bgsType: "ball-spin-clockwise",
      blur: 5,
      fgsColor: "#00ACC1",
      fgsPosition: "center-center",
      fgsSize: 60,
      fgsType: "three-strings",
      gap: 24,
      logoPosition: "center-center",
      logoSize: 120,
      logoUrl: "https://raw.githubusercontent.com/t-ho/ngx-ui-loader/master/src/assets/angular.png",
      masterLoaderId: "master",
      overlayBorderRadius: "0",
      overlayColor: "rgba(40, 40, 40, 0.8)",
      pbColor: "#00ACC1",
      pbDirection: "ltr",
      pbThickness: 3,
      hasProgressBar: true,
      text: "",
      textColor: "#FFFFFF",
      textPosition: "center-center",
      threshold: 500
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
