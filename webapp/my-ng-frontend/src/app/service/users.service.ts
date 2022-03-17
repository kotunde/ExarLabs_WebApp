import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from "../core/model/user.model";

@Injectable()
export class UsersService {
  private path: string = '/api/users';
  constructor(private httpClient: HttpClient) {}

  public get(url: string): Observable<any>{
    return this.httpClient.get(url);
  }

  public findAll(): Observable<any> {
    return this.httpClient.get<User[]>(this.path, {observe: 'response'})
  }

 
}