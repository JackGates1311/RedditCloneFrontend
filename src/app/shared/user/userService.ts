import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/service/auth.service";
import {UserModel} from "./userModel";
import {Observable} from "rxjs";
import {EditUserDataRequestPayload} from "../../auth/edit-user-data/editUserDataRequestPayload";
import {ChangePasswordRequestPayload} from "../../auth/change-password/changePasswordRequestPayload";
import {environment} from "../../../environments/environment";

@Injectable({

    providedIn: 'root'
})

export class UserService {

    apiURL: string = environment.apiURL;

    constructor(private http: HttpClient, public authService: AuthService) {
    }

    getAccountInfo(): Observable<UserModel> {

        return this.http.get<UserModel>(this.apiURL + '/api/auth/accountInfo',
            {headers: this.authService.getRequestHeaders()});
    }

    updateAccountInfo(editUserDataRequestPayload: EditUserDataRequestPayload): Observable<any> {

        return this.http.put(this.apiURL + '/api/auth/updateAccountInfo', editUserDataRequestPayload,
            {headers: this.authService.getRequestHeaders(), responseType: "text"});
    }

    changePassword(changePasswordRequestPayload: ChangePasswordRequestPayload): Observable<any> {

        return this.http.put(this.apiURL + '/api/auth/changePassword', changePasswordRequestPayload,
            {headers: this.authService.getRequestHeaders()});

    }
}