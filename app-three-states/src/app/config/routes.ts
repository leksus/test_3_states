import {Routes} from "@angular/router";
import {HomeComponent} from "../components/home/home.component";
import {LoginComponent} from "../components/login/login.component";
import {GridComponent} from "../components/grid/grid.component";

export const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },

    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'grid', component: GridComponent }
];