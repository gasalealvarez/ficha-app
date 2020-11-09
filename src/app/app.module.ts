import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ModalOwnerComponent } from './modals/modal-owner/modal-owner.component';
import { ModalPatientComponent } from './modals/modal-patient/modal-patient.component';

import  { DataDbService } from './services/data-db.service';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import  { AngularFireStorageModule } from '@angular/fire/storage'
import { environment } from 'src/environments/environment';
import { ModalBreedComponent } from './modals/modal-breed/modal-breed.component';
import { ListOwnersComponent } from './components/list-owners/list-owners.component';
import { HomeComponent } from './components/home/home.component';

//  pipe to order list
import { OrderModule } from 'ngx-order-pipe';
import { ListPatientsComponent } from './components/list-patients/list-patients.component';
import { ClinicHistoryComponent } from './components/clinic-history/clinic-history.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PreventionsComponent } from './components/preventions/preventions.component';
import { ModalProductPreventionComponent } from './modals/modal-product-prevention/modal-product-prevention.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ModalOwnerComponent,
    ModalPatientComponent,
    ModalBreedComponent,
    ListOwnersComponent,
    HomeComponent,
    ListPatientsComponent,
    ClinicHistoryComponent,
    NavbarComponent,
    PreventionsComponent,
    ModalProductPreventionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OrderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, 
    AngularFireStorageModule
  ],
  providers: [ DataDbService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
