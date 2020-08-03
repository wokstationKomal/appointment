import { AppoinmentListComponent } from './Components/appoinment-list/appoinment-list.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'appoinment-list', component: AppoinmentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
