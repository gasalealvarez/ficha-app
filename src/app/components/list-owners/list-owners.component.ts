import { Component, OnInit } from '@angular/core';
import { DataDbService } from 'src/app/services/data-db.service';
import { OwnerI } from 'src/app/models/owner.interface';

@Component({
  selector: 'app-list-owners',
  templateUrl: './list-owners.component.html',
  styleUrls: ['./list-owners.component.css']
})
export class ListOwnersComponent implements OnInit {
  
  public owners: OwnerI[];
  order: string = 'owner';

  constructor(private dataSvc: DataDbService) { }
  
  ngOnInit() {
    this.getAllOnwers();
  }
  getAllOnwers(){
    this.dataSvc.getAllOnwers()
    .subscribe(owners => {
      this.owners = owners;
    });     
  }
  
  newOnwer() {
    this.dataSvc.selectedOwner={};
  }

  onDeleteOwner(id : string) {
    this.dataSvc.deleteOwner(id);
    
  }

  onPreUpdateOwner(owner: OwnerI) {
     this.dataSvc.selectedOwner = Object.assign({}, owner);
  }

}
