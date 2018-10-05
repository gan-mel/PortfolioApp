import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';    

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: Http) { }

  // getMessages():Observable<any>{

  //   return this.http.get('http://localhost:3000/readMessages');
  //   }

    getMessages(): Observable<any[]> {
      return this.http.get('http://localhost:3000/readPosts')
        .pipe(map(res => res.json())   )  ;
        
    }

    postMessages(message): Observable<any[]> {
      return this.http.post('http://localhost:3000/posts',message)
        .pipe(map(res => res.json())   );
        
    }

}
