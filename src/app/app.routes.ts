import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages/pages.component";

const appRoutes: Routes = [
    /*{ path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent }*/
]

// routes o paginas principales
export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });