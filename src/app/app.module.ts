import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MovieModule } from './movie.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {MaterialExampleModule} from './material.module';
import { TableexampleComponent } from './components/tableexample/tableexample.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { ButtonsComponent } from './buttons/buttons.component';
import { MainPageComponent } from './FirstPage/MainPage/MainPage.component';




@NgModule({
  declarations: [	
    AppComponent,
    TableexampleComponent,
    ButtonsComponent,
    MainPageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MovieModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
