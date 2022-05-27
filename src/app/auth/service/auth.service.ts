import {EventEmitter, Injectable, Output} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RegisterRequestPayload} from "../register/registerRequestPayload";
import {Observable} from "rxjs";

@Injectable({

  providedIn: 'root'
})

export class AuthService {

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() username: EventEmitter<string> = new EventEmitter();

  constructor(private httpClient: HttpClient) {
  }

  register(registerRequestPayload: RegisterRequestPayload): Observable<any> {

    return this.httpClient.post('http://localhost:8080/api/auth/register', registerRequestPayload,
        {responseType: 'text'})
  }
}