import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataDbService } from 'src/app/services/data-db.service';

@Component({
  selector: 'app-modal-breed',
  templateUrl: './modal-breed.component.html',
  styleUrls: ['./modal-breed.component.css']
})
export class ModalBreedComponent implements OnInit {
  @ViewChild('btnClose', null) btnClose: ElementRef;

  constructor(private dbData: DataDbService) { }

  ngOnInit() {
  }
  
  onSaveBreed(breedForm: NgForm): void{
   
    this.dbData.addBreed(breedForm.value);    
    breedForm.resetForm();
 

    this.btnClose.nativeElement.click();
  }

}
