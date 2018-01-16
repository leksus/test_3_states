import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/main/app.component';
import {HomeComponent} from "./components/home/home.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./config/routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AutoCompleteModule, DialogModule, TreeModule} from 'primeng/primeng';
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./components/login/login.component";
import {ValidEmailDirective} from './directive/valid-email.directive';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageService} from "./service/dialog-message.service";
import { GridComponent } from './components/grid/grid.component';


@NgModule({
    declarations: [
        AppComponent, HomeComponent, LoginComponent, ValidEmailDirective, GridComponent
    ],
    imports: [
        BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule,
        AutoCompleteModule, HttpClientModule, TreeModule, DialogModule, BrowserAnimationsModule
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
