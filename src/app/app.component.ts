import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ArtStore';

  constructor(private firestore: AngularFirestore) { }

  async ngOnInit() {

    const documento = await this.firestore.collection('teste')
      .doc('HUVkT9OlD2CMcb0VPYBP')
      .get()
      .toPromise();

    console.log(documento);

  }

}
    
