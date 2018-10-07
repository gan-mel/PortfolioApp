import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  // getMessages():Observable<any>{

  //   return this.http.get('http://localhost:3000/readMessages');
  //   }


    registerNew(regForm): Observable<any[]> {
      return this.http.post('http://localhost:3000/readMessages', regForm)
        .pipe(map(res => res.json())   );

    }

}



