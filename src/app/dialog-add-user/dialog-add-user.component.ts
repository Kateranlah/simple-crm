import { Component } from '@angular/core';
import { Firestore, collection, doc,  updateDoc, docData, setDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  user$: Observable<any>
  birthDate: Date;
  userId;
  
  constructor(private firestore: Firestore, private route: ActivatedRoute){
    
  }


  saveUser(){
    this.user.birthDate = this.birthDate.getTime();
    console.log('user', this.user);
    console.log(this.birthDate);
    this.route.params.subscribe((params) => {
      this.userId = params['id']
    })

    
    let coll = collection(this.firestore, 'user')
    const docRef = doc(coll)
      setDoc(docRef, this.user.toJSON())

  
    }}
