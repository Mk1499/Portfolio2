import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth' ; 
import {Router} from '@angular/router' ; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = "test@email.com" ; 
  password ;
  authstate:any = null ;  
  constructor(public fireLogin: AngularFireAuth , public rtr:Router) { }

  ngOnInit() {
  }
 Login(){
    this.fireLogin.auth.signInWithEmailAndPassword(this.email , this.password).then(
      user=>{
        localStorage.setItem('isLogged', 'true') ;
        alert("Signed In"); 
        this.rtr.navigate(['/welcome']) ;
        location.reload() ; 

      }
      
    ).catch(error=>{
      console.log("Error : " , error.message) ; 
      alert(error.message) ; 
    })
   //
 }
}
