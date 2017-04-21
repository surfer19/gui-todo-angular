import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './root.component';
import { pageNotFound } from "./pageNotFound.component";
import { HomeComponent } from "./home.component";
import { InputBoxComponent } from "./inputBox.component";

const appRoutes = [
  { path: '',  component: AppComponent },
  { path: 'home', component: HomeComponent }
  //{ path: 'home', component: pageNotFound },
  //{ path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    InputBoxComponent,
    pageNotFound,
    HomeComponent,
  ],//
  providers: [

  ],
  bootstrap: [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
