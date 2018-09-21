import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  loadspinner :boolean = true ; 

  itemList:AngularFireList<any> ; 
  itemArray = [] ; 

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

  constructor(public db:AngularFireDatabase) {

    this.itemList = this.db.list('projects') ; 
    console.log("Load Spinner : "+this.loadspinner) ; 
    this.itemList.snapshotChanges().subscribe(actions =>{
      actions.forEach(action => {
        var y = action.payload.toJSON() ; 
        this.itemArray.push(y); 
      })
      this.loadspinner = false ; 
      console.log("Load Spinner : "+this.loadspinner)
    })

      
    

   }

  ngOnInit() {
  }

}
