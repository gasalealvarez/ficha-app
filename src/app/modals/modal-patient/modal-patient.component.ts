import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { BreedI } from 'src/app/models/breed.interface';
import { NgForm } from '@angular/forms';
import { OwnerI } from 'src/app/models/owner.interface';
import { PatientI } from 'src/app/models/patient.interface'

@Component({
  selector: 'app-modal-patient',
  templateUrl: './modal-patient.component.html',
  styleUrls: ['./modal-patient.component.css']

})
export class ModalPatientComponent implements OnInit {
  @ViewChild('btnClose', null) btnClose: ElementRef;
  @Input() seleccionado : OwnerI = {}; 
  private breeds: BreedI[];
  public titulo: string;

  constructor(private dataSvc: DataDbService) { }

  ngOnInit() {
    this.getAllBreeds();
    console.log("this.datasvc.selectedpatient ", this.dataSvc.selectedPatient.id );
  }

  getAllBreeds(){
    this.dataSvc.getAllBreeds()
    .subscribe(breeds => {
      this.breeds = breeds;
    });    
  }
  onSavePatient(patientForm: NgForm): void{
    if (this.seleccionado.id == undefined) {
      patientForm.value.idPropietario = this.dataSvc.selectedPatient.idPropietario;
      patientForm.value.propietario = this.dataSvc.selectedPatient.propietario;
    }

    if (this.dataSvc.selectedPatient.id == null) {
      // New 
      this.dataSvc.addPatient(patientForm.value); 
    } else {
      // Update
      this.dataSvc.editPatient(patientForm.value, this.dataSvc.selectedPatient.id );
    }
    patientForm.resetForm();
    this.btnClose.nativeElement.click();
}
}
