import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private http=inject(HttpClient);


  get(): Observable<any> {
    return  this.http.get("/api/users");
  }
}
