import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth' ; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  auth:boolean = false ; 
  
  constructor(public afAuth:AngularFireAuth) {
          
    var authStatus = localStorage.getItem('isLogged') ; 
    if(authStatus === 'true'){
      this.auth = true ; 
    }
    else {
      this.auth = false  ; 
    }

    console.log("auth", this.auth)

          
   }

  ngOnInit() {
     
            
  }

  signOut(){
    this.afAuth.auth.signOut() ; 
    this.auth = false ; 
    localStorage.setItem('isLogged', 'false') ; 
    alert("Signed Out")
  }

}
