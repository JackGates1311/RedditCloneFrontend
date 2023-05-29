import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommunityModel} from "./communityModel";
import {CreateEditCommunityRequestPayload} from "../../community/community-create-edit/createEditCommunityRequestPayload";
import {AuthService} from "../../auth/service/auth.service";
import {CommunitySuspendRequestPayload} from "../../community/community-suspend/communitySuspendRequestPayload";
import {environment} from "../../../environments/environment";

@Injectable({
   providedIn: 'root'
})

export class CommunityService {

    apiURL: string = environment.apiURL;

   constructor(private http: HttpClient, public authService: AuthService) {
   }

   getCommunityByName(communityName: string): Observable<CommunityModel> {

      return this.http.get<CommunityModel>(this.apiURL + '/api/communities/name=' + communityName);
   }

    getAllCommunities(): Observable<Array<CommunityModel>> {

       return this.http.get<Array<CommunityModel>>(this.apiURL + '/api/communities/getAllCommunities');
    }

    getCommunityById(communityId: string): Observable<CommunityModel> {

        return this.http.get<CommunityModel>(this.apiURL + '/api/communities/id=' + communityId,
            {headers: this.authService.getRequestHeaders()});
    }

    createCommunity(createEditCommunityRequestPayload: CreateEditCommunityRequestPayload): Observable<any> {

        return this.http.post(this.apiURL + '/api/communities/createCommunity',
            createEditCommunityRequestPayload, {headers: this.authService.getRequestHeaders(), responseType: "text"})

    }

    updateCommunity(createEditCommunityRequestPayload: CreateEditCommunityRequestPayload, communityId: string):
        Observable<any> {

        return this.http.put<any>(this.apiURL + '/api/communities/' + communityId,
            createEditCommunityRequestPayload, {headers: this.authService.getRequestHeaders()});

    }

    suspendCommunity(communitySuspendRequestPayload: CommunitySuspendRequestPayload, communityId: string):
        Observable<any> {

        return this.http.put<any>(this.apiURL + '/api/communities/suspend/' + communityId,
           communitySuspendRequestPayload, {headers: this.authService.getRequestHeaders()});
    }

    searchCommunity(url: string): Observable<any> {
       return this.http.get(url);
    }
}