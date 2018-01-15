import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/main/app.component';
import {HomeComponent} from "./components/home/home.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./config/routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AutoCompleteModule, TreeModule} from 'primeng/primeng';
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./components/login/login.component";
import {ValidEmailDirective} from './directive/valid-email.directive';


@NgModule({
    declarations: [
        AppComponent, HomeComponent, LoginComponent, ValidEmailDirective
    ],
    imports: [
        BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule,
        AutoCompleteModule, HttpClientModule, TreeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
