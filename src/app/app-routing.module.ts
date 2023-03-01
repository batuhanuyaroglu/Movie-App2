import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComedyComponent } from './components/comedy/comedy.component';
import { DramaComponent } from './components/drama/drama.component';
import { FamilyComponent } from './components/family/family.component';
import { HorrorMovieComponent } from './components/horrorMovie/horrorMovie.component';
import { MysteryComponent } from './components/mystery/mystery.component';
import { ScienceComponent } from './components/science/science.component';
import { TableexampleComponent } from './components/tableexample/tableexample.component';
import { WesternComponent } from './components/western/western.component';
import { MainPageComponent } from './FirstPage/MainPage/MainPage.component';

const routes: Routes = [
  {path:'horror',component:HorrorMovieComponent},
  {path:'classic',component:TableexampleComponent},
  {path:'comedy',component:ComedyComponent},
  {path:'drama',component:DramaComponent},
  {path:'family',component:FamilyComponent},
  {path:'mystery',component:MysteryComponent},
  {path:'science',component:ScienceComponent},
  {path:'western',component:WesternComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
