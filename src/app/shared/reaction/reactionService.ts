import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/service/auth.service";
import {ReactionModel} from "./reactionModel";
import {LocalStorageService} from "ngx-webstorage";
import {environment} from "../../../environments/environment";

@Injectable({

    providedIn: 'root'
})

export class ReactionService {

    apiURL: string = environment.apiURL;

    constructor(private http: HttpClient, public authService: AuthService) {}

    sendReaction(reactionType: string, postId: number, commentId: number): Observable<any> {

        /*this.reactionRequestPayload.reactionType = reactionType;
        this.reactionRequestPayload.postId = postId;*/

        return this.http.post(this.apiURL + '/api/reactions', {reactionType: reactionType,
                postId: postId, commentId: commentId},
            {headers: this.authService.getRequestHeaders(), responseType: "text"})

    }

    getReactionsByUsername(): Observable<Array<ReactionModel>> {

        return this.http.get<Array<ReactionModel>>(this.apiURL + '/api/reactions',
            {headers: this.authService.getRequestHeaders()});
    }

}