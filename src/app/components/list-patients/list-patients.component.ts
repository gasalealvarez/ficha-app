import { Component, OnInit, Input } from '@angular/core';
import { DataDbService } from 'src/app/services/data-db.service';
import { PatientI } from 'src/app/models/patient.interface';
import { OwnerI } from 'src/app/models/owner.interface';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})

export class ListPatientsComponent implements OnInit {
  public patients : PatientI[];
  private seleccionado: OwnerI= {};
  order: string = 'propietario';

  constructor(private dataSvc: DataDbService) { }

  ngOnInit() {
    this.getAllPatients();
  }

  getAllPatients() {
    this.dataSvc.getAllPatients()
    .subscribe(patients => {
      this.patients = patients;
      console.log('patients ', this.patients);
    });       
    
    
  }

  onDeletePatient(id: string) {
    this.dataSvc.deletePatient(id);
  }

  onPreUpdatePatient(patient: PatientI) {
    this.dataSvc.selectedPatient = Object.assign({}, patient); 
 }
}
