import { Injectable, OnInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServiceService implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router) { }


  onSubmit(data) {

    this.http.post<any>('http://localhost:3000/register', data).subscribe(result => {
      this.router.navigateByUrl('/login');
      alert(JSON.stringify(result));
    });
  }

  clickLogin() {

  }

  ngOnInit() {

  }
}
