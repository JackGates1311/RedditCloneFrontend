import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CommentModel} from "./commentModel";
import {HttpClient} from "@angular/common/http";

@Injectable({

    providedIn: 'root'
})

export class CommentService {

    constructor(private http: HttpClient) {
    }

    getPostComments(postId: string): Observable<Array<CommentModel>> {

        return this.http.get<Array<CommentModel>>('http://localhost:8080/api/comments/getPostComments/' + postId);
    }
}