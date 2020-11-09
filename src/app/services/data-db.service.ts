import { Injectable , EventEmitter} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { OwnerI } from '../models/owner.interface'
import { PatientI } from '../models/patient.interface';
import { BreedI } from '../models/breed.interface'
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class DataDbService {
  private ownerCollection : AngularFirestoreCollection<OwnerI>;
  private owners: Observable<OwnerI[]>;
  private ownerDoc: AngularFirestoreDocument<OwnerI>;

  private breedsCollection:  AngularFirestoreCollection<BreedI>;
  private breeds: Observable<BreedI[]>;

  private patientCollection:  AngularFirestoreCollection<PatientI>;
  private patients: Observable<PatientI[]>;
  private patientDoc : AngularFirestoreDocument<PatientI>;

  constructor(private afs: AngularFirestore) { 
    this.ownerCollection = afs.collection<OwnerI>('propietarios');
    this.owners = this.ownerCollection.valueChanges();

    this.breedsCollection = afs.collection<BreedI>('razas');
    this.breeds = this.breedsCollection.valueChanges();

    this.patientCollection = afs.collection<PatientI>('pacientes');
    this.patients = this.patientCollection.valueChanges();
  }

  public selectedOwner : OwnerI={};

  public selectedPatient : PatientI={};

  public newBreed : BreedI={};
 
  public isPatient$ = new EventEmitter<boolean>();
  

  getAllOnwers() {
    this.ownerCollection = this.afs.collection<OwnerI>('propietarios');
    return this.owners = this.ownerCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as OwnerI;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }


  addOwner(formOwner : OwnerI){
    this.ownerCollection.add(formOwner);
  }
  
  editOwner(owner: OwnerI): void{
    let idOwner = owner.id;
    this.ownerDoc = this.afs.doc<OwnerI>(`propietarios/${idOwner}`);
    this.ownerDoc.update(owner);
  }

  deleteOwner(id: string){
    this.ownerDoc = this.afs.doc<OwnerI>(`propietarios/${id}`);
    this.ownerDoc.delete();
  }
  getAllOwner(){
    
  }

// ====================================================================
  getAllBreeds() {
    this.breedsCollection = this.afs.collection<BreedI>('razas');
    return this.breeds = this.breedsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as BreedI;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  addBreed(breed: BreedI): void {
    this.breedsCollection.add(breed);
  }

  // ===================================================================
  getAllPatients() {
    this.patientCollection = this.afs.collection<PatientI>('pacientes');
    return this.patients = this.patientCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as PatientI;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getAllPatientsbyId(id : string) {
    this.patientCollection = this.afs.collection<PatientI>('pacientes', ref => ref.where('idPropietario', '==', id));
    return this.patients = this.patientCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as PatientI;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  addPatient ( patient : PatientI) {
    this.patientCollection.add(patient);
  }

  editPatient(patient: PatientI, id: string) {
    // let idPatient = patient.id;
    this.patientDoc = this.afs.doc<PatientI>(`pacientes/${id}`);
    this.patientDoc.update(patient);
  }

  deletePatient(id: string) {
    this.patientDoc = this.afs.doc<PatientI>(`pacientes/${id}`);
    this.patientDoc.delete();
  }
}
