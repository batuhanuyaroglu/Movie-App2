import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableexampleComponent } from './components/tableexample/tableexample.component';
import { MainPageComponent } from './FirstPage/MainPage/MainPage.component';

const routes: Routes = [
  
  {path:'classic',component:TableexampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
