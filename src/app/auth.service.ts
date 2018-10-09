import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
//import { map } from 'rxjs/operators';
//import {Observable} from 'rxjs';
import { Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = 'http://localhost:3000/auth';
  NAME_KEY = "name";
  TOKEN_KEY = "token";


  constructor(private http: Http, private route: Router) { }

  // getMessages():Observable<any>{

  //   return this.http.get('http://localhost:3000/readMessages');
  //   }


  get name(){
    return localStorage.getItem(this.NAME_KEY);
  }

  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY)
  }

    registerNew(regForm) {
      return this.http.post(this.BASE_URL, regForm).subscribe(res => {

        const authResponse = res.json();

        if(!authResponse){
          return;
        }

        localStorage.setItem(this.TOKEN_KEY,res.json().token)
        localStorage.setItem(this.NAME_KEY,res.json().name)
        this.route.navigate(['/']);
      })

      

      }

      logout(){
        localStorage.removeItem(this.TOKEN_KEY)
        localStorage.removeItem(this.NAME_KEY)
      }
        // .pipe(
          
        //   map(res => res.json())
          
        // );

    

}



