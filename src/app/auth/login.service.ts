import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { HttpClient } from 'selenium-webdriver/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private afAuth: AngularFireAuth,
    

  ) { }

  login() {
    console.log('Redirecting to google login provider')
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  logout() {
    console.log('logouting..')
    this.afAuth.auth.signOut()
  }

  getLoggedInUser() {
    return this.afAuth.authState;
  }
  loginFB() {
    console.log('Redirecting to Facebook login provider')
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

}
