import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/service/auth.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class SearchService {

    apiURL: string = environment.apiURL;

    constructor(private http: HttpClient) {
    }

    searchByPdf(url: string, formData: FormData): Observable<any> {
        return this.http.post(this.apiURL + url, formData);
    }

}