import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/service/auth.service";
import {ReactionModel} from "./reactionModel";
import {LocalStorageService} from "ngx-webstorage";

@Injectable({

    providedIn: 'root'
})

export class ReactionService {

    constructor(private http: HttpClient, public authService: AuthService) {

    }

    sendReaction(reactionType: string, postId: number, commentId: number): Observable<any> {

        /*this.reactionRequestPayload.reactionType = reactionType;
        this.reactionRequestPayload.postId = postId;*/

        return this.http.post('http://localhost:8080/api/reactions', {reactionType: reactionType,
                postId: postId, commentId: commentId},
            {headers: this.authService.getRequestHeaders(), responseType: "text"})

    }

    getReactionsByUsername(): Observable<Array<ReactionModel>> {

        return this.http.get<Array<ReactionModel>>('http://localhost:8080/api/reactions',
            {headers: this.authService.getRequestHeaders()});
    }

}