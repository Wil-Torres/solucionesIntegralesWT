import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./sleeve/home/home.component";
import { AboutComponent } from "./sleeve/about/about.component";
import { NewsComponent } from "./sleeve/news/news.component";
import { ContactUsComponent } from "./sleeve/contact-us/contact-us.component";


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'home', component: HomeComponent},
            {path: 'about', component: AboutComponent},
            {path: 'news', component: NewsComponent},
            {path: 'contact-us', component: ContactUsComponent},
            {path: '', redirectTo: '/home', pathMatch: 'full'}
        ]
    }
    
];
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );