import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/main/app.component';
import {HomeComponent} from "./components/home/home.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./config/routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AutoCompleteModule} from 'primeng/primeng';
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./components/login/login.component";


@NgModule({
    declarations: [
        AppComponent, HomeComponent, LoginComponent
    ],
    imports: [
        BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule,
        AutoCompleteModule, HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
