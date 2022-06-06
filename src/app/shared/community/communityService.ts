import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommunityModel} from "./communityModel";

@Injectable({

   providedIn: 'root'
})

export class CommunityService {

   constructor(private http: HttpClient) {
   }

   getCommunityByName(communityName): Observable<CommunityModel> {

      return this.http.get<CommunityModel>('http://localhost:8080/api/communities/name=' + communityName);
   }

    getAllCommunities(): Observable<Array<CommunityModel>> {

       return this.http.get<Array<CommunityModel>>('http://localhost:8080/api/communities/getAllCommunities');
    }
}