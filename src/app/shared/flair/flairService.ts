import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/service/auth.service";
import {Observable} from "rxjs";
import {FlairModel} from "./flairModel";

@Injectable({
    providedIn: 'root'
})

export class FlairService {

    apiURL: string = environment.apiURL;

    constructor(private http: HttpClient, public authService: AuthService) {
    }

    getFlairs(): Observable<Array<FlairModel>>{
        return this.http.get<Array<FlairModel>>(this.apiURL + '/api/flair',
            {headers: this.authService.getRequestHeaders()});
    }
}