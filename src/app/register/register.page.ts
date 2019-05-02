import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';





@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(

    private regis: ServiceService

  ) { }


  onSubmit(data) {
    console.log("Registing...");
    this.regis.onSubmit(data)
  }

}


