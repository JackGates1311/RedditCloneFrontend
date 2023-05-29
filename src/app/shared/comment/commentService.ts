import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CommentModel} from "./commentModel";
import {HttpClient} from "@angular/common/http";
import {CommentRequestPayload} from "../../comment/comment-create-edit/commentRequestPayload";
import {AuthService} from "../../auth/service/auth.service";
import {environment} from "../../../environments/environment";

@Injectable({

    providedIn: 'root'
})

export class CommentService {

    apiURL: string = environment.apiURL;

    constructor(private http: HttpClient, public authService: AuthService) {
    }

    getPostComments(postId: string, sortBy: string): Observable<Array<CommentModel>> {

        return this.http.get<Array<CommentModel>>(this.apiURL + '/api/comments/getPostComments/' + postId +
            "?sortBy=" + sortBy);
    }

    getCommentById(commentId: string): Observable<CommentModel> {

        return this.http.get<CommentModel>(this.apiURL +'/api/comments/' + commentId);
    }

    postComment(commentRequestPayload: CommentRequestPayload): Observable<any> {

        return this.http.post(this.apiURL + '/api/comments/postComment', commentRequestPayload,
            {headers: this.authService.getRequestHeaders(), responseType: "text"});

    }

    editComment(commentRequestPayload: CommentRequestPayload, commentId: string): Observable<any> {

        return this.http.put<any>(this.apiURL + '/api/comments/' + commentId, commentRequestPayload,
            {headers: this.authService.getRequestHeaders(), responseType: 'text' as 'json'});

    }

    deleteCommentById(commentId: string): Observable<ArrayBuffer> {

        return this.http.delete<ArrayBuffer>(this.apiURL + '/api/comments/' + commentId,
            {headers: this.authService.getRequestHeaders(), responseType: 'text' as 'json'});

    }
}