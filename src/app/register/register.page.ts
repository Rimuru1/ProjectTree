import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';






@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(

    private regis: ServiceService,
    private router: Router

  ) { }


  onSubmit(data) {
    console.log("Registing...");
    this.regis.onSubmit(data)

    if (data != null) {
      this.router.navigateByUrl('/login');

    }
  }
  ngOnInit() {

  }
}


