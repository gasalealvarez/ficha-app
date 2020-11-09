import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOwnersComponent } from './components/list-owners/list-owners.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListPatientsComponent } from './components/list-patients/list-patients.component';
import { ClinicHistoryComponent } from './components/clinic-history/clinic-history.component';
import { PreventionsComponent } from './components/preventions/preventions.component';


const routes: Routes = [
  { path:'',component: ProfileComponent},
  { path: 'profile/list-owners', component: ListOwnersComponent},
  { path: 'profile/list-patients', component: ListPatientsComponent},
  { path: 'patient/history/:id', component: ClinicHistoryComponent},
  { path: 'patient/preventions/:id', component: PreventionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
