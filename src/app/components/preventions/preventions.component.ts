import { Component, OnInit } from '@angular/core';
import { DataDbService } from 'src/app/services/data-db.service';

@Component({
  selector: 'app-preventions',
  templateUrl: './preventions.component.html',
  styleUrls: ['./preventions.component.css']
})
export class PreventionsComponent implements OnInit {

  constructor(private dataSvc: DataDbService) { }
  public isPaciente: boolean = false;

  ngOnInit(): void {
    this.dataSvc.isPatient$.emit(true);
  }
}
