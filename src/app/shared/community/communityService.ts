import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {CommunityModel} from "./communityModel";
import {
    CreateEditCommunityRequestPayload
} from "../../community/community-create-edit/createEditCommunityRequestPayload";
import {AuthService} from "../../auth/service/auth.service";

@Injectable({

   providedIn: 'root'
})

export class CommunityService {

   constructor(private http: HttpClient, public authService: AuthService) {
   }

   getCommunityByName(communityName: string): Observable<CommunityModel> {

      return this.http.get<CommunityModel>('http://localhost:8080/api/communities/name=' + communityName);
   }

    getAllCommunities(): Observable<Array<CommunityModel>> {

       return this.http.get<Array<CommunityModel>>('http://localhost:8080/api/communities/getAllCommunities');
    }

    getCommunityById(communityId: string): Observable<CommunityModel> {

        return this.http.get<CommunityModel>('http://localhost:8080/api/communities/id=' + communityId,
            {headers: this.authService.getRequestHeaders()});
    }

    createCommunity(createEditCommunityRequestPayload: CreateEditCommunityRequestPayload): Observable<any> {

        return this.http.post('http://localhost:8080/api/communities/createCommunity',
            createEditCommunityRequestPayload, {headers: this.authService.getRequestHeaders(), responseType: "text"})

    }

    updateCommunity(createEditCommunityRequestPayload: CreateEditCommunityRequestPayload, communityId: string):
        Observable<any> {

        return this.http.put<any>('http://localhost:8080/api/communities/' + communityId,
            createEditCommunityRequestPayload, {headers: this.authService.getRequestHeaders()});

    }
}