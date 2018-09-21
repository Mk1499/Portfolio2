import { AngularFireStorageModule } from 'angularfire2/storage';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireDatabaseModule , AngularFireList} from 'angularfire2/database' ;  
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth' ; 

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AddProjectsComponent } from './add-projects/add-projects.component';
import { LoginComponent } from './login/login.component' ;

import {Routes , RouterModule} from '@angular/router'; 
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';

import {environment} from '../environments/environment';
import { SpinnerComponent } from './spinner/spinner.component';


const appRoutes:Routes = [
  {path:'welcome' , component:WelcomeComponent} , 
  {path:'about' , component:AboutComponent} , 
  {path:'projects' , component:ProjectsComponent} , 
  {path : 'contact' , component:ContactComponent} , 
  {path:'add' , component:AddProjectsComponent} , 
  {path:'login' , component:LoginComponent} , 
  {path:'',redirectTo:'/welcome' , pathMatch: 'full' } , 
  {path:'**' , component:WelcomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    AddProjectsComponent,
    LoginComponent,
    SpinnerComponent 
  ],
  imports: [
    BrowserModule , 
    RouterModule.forRoot(appRoutes) , 
    AngularFireDatabaseModule , 
    AngularFireModule.initializeApp(environment.firebase) , 
    AngularFireAuthModule,
    FormsModule , 
    AngularFireStorageModule , 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
