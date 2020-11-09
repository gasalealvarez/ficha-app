import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clinic-history',
  templateUrl: './clinic-history.component.html',
  styleUrls: ['./clinic-history.component.css']
})
export class ClinicHistoryComponent implements OnInit {
  constructor(private storage : AngularFireStorage) { }

  uploadPercent : Observable<number>;
  downloadURL : Observable<string>;

  ngOnInit() {
  }

  agregandoalgo() {
    console.log('agrego aqui')
  }

  onUpload(e) {
    // console.log('evento', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filepath = `uploads/${id}`
    const ref = this.storage.ref(filepath);
    const task = this.storage.upload(filepath, file);
    this.uploadPercent = task.percentageChanges();

    task.snapshotChanges()
      .pipe( 
        finalize (() =>  { 
          ref.getDownloadURL().subscribe( urlImage => {
        this.downloadURL = urlImage;
        // add datos
      });
      })
    ).subscribe();
  }


}
