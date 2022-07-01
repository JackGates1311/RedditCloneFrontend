import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CommentModel} from "./commentModel";
import {HttpClient} from "@angular/common/http";
import {CommentRequestPayload} from "../../comment/comment-create-edit/commentRequestPayload";
import {AuthService} from "../../auth/service/auth.service";

@Injectable({

    providedIn: 'root'
})

export class CommentService {

    constructor(private http: HttpClient, public authService: AuthService) {
    }

    getPostComments(postId: string): Observable<Array<CommentModel>> {

        return this.http.get<Array<CommentModel>>('http://localhost:8080/api/comments/getPostComments/' + postId);
    }

    getCommentById(commentId: string): Observable<CommentModel> {

        return this.http.get<CommentModel>('http://localhost:8080/api/comments/' + commentId);
    }

    postComment(commentRequestPayload: CommentRequestPayload): Observable<any> {

        return this.http.post('http://localhost:8080/api/comments/postComment', commentRequestPayload,
            {headers: this.authService.getRequestHeaders(), responseType: "text"});

    }

    editComment(commentRequestPayload: CommentRequestPayload, commentId: string): Observable<any> {

        return this.http.put<any>('http://localhost:8080/api/comments/' + commentId, commentRequestPayload,
            {headers: this.authService.getRequestHeaders(), responseType: 'text' as 'json'});

    }

    deleteCommentById(commentId: string): Observable<ArrayBuffer> {

        return this.http.delete<ArrayBuffer>('http://localhost:8080/api/comments/' + commentId,
            {headers: this.authService.getRequestHeaders(), responseType: 'text' as 'json'});

    }
}