import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { OwnerI } from 'src/app/models/owner.interface';
import { PatientI } from 'src/app/models/patient.interface';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[DataDbService]
})
export class ProfileComponent implements OnInit {
 
  public owners: OwnerI[];
  public patients : PatientI[];
  private seleccionado : OwnerI= {};
  private route : string;


  constructor(private dataSvc: DataDbService, private router: Router) { }

  
  ngOnInit() {
    this.getAllOnwers();
  }

  getAllOnwers(){
    this.dataSvc.getAllOnwers()
    .subscribe(owners => {
      this.owners = owners;
    });     
  }

  
  onSelect(): void {
    this.dataSvc.getAllPatientsbyId(this.seleccionado.id)
    .subscribe(patients => {
      this.patients = patients;
    });   
  }

  verHistorial(idPaciente : string) {
        
    this.route = 'patient/preventions/' + idPaciente ;
         
    this.router.navigate([this.route]);
  }
  
}
