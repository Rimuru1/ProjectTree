import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../app/service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private service: ServiceService
  ) {
   
  }

  ngOnInit() {
  }



}
