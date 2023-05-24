import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/service/auth.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ImageService {

    apiURL: string = environment.apiURL;

    constructor(private http: HttpClient, public authService: AuthService) {
    }

    uploadImage(url: String, formData: FormData): Observable<any> {
        return this.http.post(this.apiURL + url, formData,
            {headers: this.authService.getRequestHeaders(), responseType: "text"});
    }

    deleteImage(url: String): Observable<any> {
        return this.http.delete(this.apiURL + url,
            {headers: this.authService.getRequestHeaders(), responseType: "text"});
    }

    updateImage(url: String, formData: FormData) {
        return this.http.put(this.apiURL + url, formData,
            {headers: this.authService.getRequestHeaders(), responseType: "text"});
    }
}