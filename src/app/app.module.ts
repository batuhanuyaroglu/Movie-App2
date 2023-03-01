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
import { HorrorMovieComponent } from './components/horrorMovie/horrorMovie.component';
import { ComedyComponent } from './components/comedy/comedy.component';
import { DramaComponent } from './components/drama/drama.component';
import { FamilyComponent } from './components/family/family.component';
import { MysteryComponent } from './components/mystery/mystery.component';
import { ScienceComponent } from './components/science/science.component';
import { WesternComponent } from './components/western/western.component';
import {MatPaginatorModule} from '@angular/material/paginator';

import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [		
    AppComponent,
    TableexampleComponent,
    ButtonsComponent,
    MainPageComponent,
    HorrorMovieComponent,
    ComedyComponent,
    DramaComponent,
    FamilyComponent,
    MysteryComponent,
    ScienceComponent,
    WesternComponent
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
    MatPaginatorModule,

    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
