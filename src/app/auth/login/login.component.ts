import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user: firebase.User;

  constructor(
    private service: LoginService,
    private router: Router,
  
  ) {}

  ngOnInit() {
    this.service.getLoggedInUser()
    .subscribe( user => {
      console.log( user );
      this.user = user;
      
      if(this.user != null){
        this.router.navigateByUrl('/home') ; 
      }
    
    });

  
  
  }

  loginGoogle(){
    console.log("login...");
    this.service.login()
    
  }
  


}
