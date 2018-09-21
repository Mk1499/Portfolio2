import { Router } from '@angular/router';
import { AngularFireStorage , AngularFireStorageReference , AngularFireUploadTask } from 'angularfire2/storage';
import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})
export class AddProjectsComponent implements OnInit {

  itemList:AngularFireList<any> ;
  ref: AngularFireStorageReference ; 
  uptask: AngularFireUploadTask ; 

  data ={
    name:'' , 
    description:'' ,  
    url:'' ,
    gitUrl:'',
    tech1:'',
    tech2:'',
    tech3:'' ,
    imgUrl:''
  }
  image:File ; 

  constructor(public db:AngularFireDatabase , public store:AngularFireStorage
              , public rtr:Router ) { 
      this.itemList = this.db.list('projects') ; 
      }

  ngOnInit() {
  }
  addProject(){
    // Add Project Data 
    
    // Begin to  upload 
    const id = Math.random().toString(14).substring(2) ; 
    this.ref = this.store.ref(id) ; 
    this.ref.put(this.image).then(()=>{
    this.ref.getDownloadURL().subscribe(url=>{ 
    this.data.imgUrl = url ; 
    this.itemList.push(this.data).then(()=>{
             this.rtr.navigate(['/project'])         
         }) ; 
         
      } 
      )
    })
  }


  out(event){
    this.image = event.target.files[0] ; 
   
  }



}
