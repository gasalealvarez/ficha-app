import { Component, OnInit } from '@angular/core';
import { DataDbService } from 'src/app/services/data-db.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dataSvc: DataDbService) { }
  public isPaciente: boolean = false;


  ngOnInit() {
    
    this.dataSvc.isPatient$.subscribe(state => {
      this.isPaciente = state;
      console.log('Navbar ', state);
    });
  }

}
