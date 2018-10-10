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

  BASE_URL = 'http://localhost:3000';
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

    login(loginDetails) {
      return this.http.post(this.BASE_URL + '/login', loginDetails).subscribe(res => {
          this.authenticate(res);
      });

    }

    registerNew(regForm) {
      return this.http.post(this.BASE_URL + '/auth', regForm).subscribe(res => {

        this.authenticate(res);

      })

      

      }

      logout(){
        localStorage.removeItem(this.TOKEN_KEY)
        localStorage.removeItem(this.NAME_KEY)
      }

      authenticate(res){
        if(!res){
          return;
        }

        localStorage.setItem(this.TOKEN_KEY,res.json().token)
        localStorage.setItem(this.NAME_KEY,res.json().name)
        this.route.navigate(['/']);
      }
        // .pipe(
          
        //   map(res => res.json())
          
        // );

    

}



