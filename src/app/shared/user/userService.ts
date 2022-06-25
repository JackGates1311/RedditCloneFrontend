import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/service/auth.service";
import {UserModel} from "./userModel";
import {Observable} from "rxjs";

@Injectable({

    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient, public authService: AuthService) {
    }

    getAccountInfo(): Observable<UserModel> {

        return this.http.get<UserModel>('http://localhost:8080/api/auth/accountInfo',
            {headers: this.authService.getRequestHeaders()});
    }

}