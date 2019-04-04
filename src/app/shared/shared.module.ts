import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { FooterPageComponent } from './footer-page/footer-page.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
    ],
    declarations: [
        HeaderComponent,
        FooterPageComponent,
    ],
    exports: [
        HeaderComponent,
        FooterPageComponent
    ]
})

export class SharedModule { }
