import { Injectable } from '@angular/core';
import { User } from './user/user';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>("http://localhost:8080", user);
  }

/*getUser() : Observable<User[]>{
    return this.http.get<User>('http://localhost:8080');
  }*/

/*getUser() : Observable<User[]>{
    return null;
  }*/

  /* teste */
  getUser() : User[]{
    let user = new User();
    user.id = 1;
    user.name = 'Ana';
    user.email = 'email@email.com';
    return [user]
  }

}
