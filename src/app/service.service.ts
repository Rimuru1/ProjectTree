import { Injectable, OnInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService implements OnInit{

  constructor(private http: HttpClient) {

   }
   onSubmit(data){
    alert(JSON.stringify(data));
    this.http.post<any>('http://localhost:3000/register', data).subscribe(result=>{
        alert(JSON.stringify(result));
    });
  }
  ngOnInit(){
    
  }
}
