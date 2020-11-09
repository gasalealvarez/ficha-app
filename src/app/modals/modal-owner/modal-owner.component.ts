import { Component, OnInit,  ViewChild, ElementRef, Input  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataDbService  } from '../../services/data-db.service'
import { OwnerI } from '../../models/owner.interface';

@Component({
  selector: 'app-modal-owner',
  templateUrl: './modal-owner.component.html',
  styleUrls: ['./modal-owner.component.css']
})
export class ModalOwnerComponent implements OnInit {
  @ViewChild('btnClose', null) btnClose: ElementRef;

  constructor(private dbData: DataDbService) { }

  ngOnInit() {
  }
  
  onSaveOwner(formOwner: NgForm) : void{
    if (formOwner.value.address==undefined){
      formOwner.value.address="";
    }

    if (formOwner.value.phone==undefined){
      formOwner.value.phone="";
    }
    
    if (formOwner.value.comments==undefined){
      formOwner.value.comments="";
    }
    
    if (formOwner.value.id == null) {
      // New 
      this.dbData.addOwner(formOwner.value);
    } else {
      // Update
      this.dbData.editOwner(formOwner.value);
    }
    
    this.btnClose.nativeElement.click();
  }
  
}
