import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {PostModel} from "./postModel";
import {CreateEditPostRequestPayload} from "../../post/post-create-edit/createEditPostRequestPayload";
import {AuthService} from "../../auth/service/auth.service";
import {LocalStorageService} from "ngx-webstorage";

@Injectable({
    providedIn: 'root'
})

export class PostService {

    constructor(private http: HttpClient, public authService: AuthService) {
    }

    getAllPosts(): Observable<Array<PostModel>> {

        return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts/getAllPosts');
    }

    getPostsByCommunityName(communityName): Observable<Array<PostModel>> {

        return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts/communityName=' + communityName);
    }

    createPost(createEditPostRequestPayload: CreateEditPostRequestPayload): Observable<any> {

        return this.http.post('http://localhost:8080/api/posts/createPost', createEditPostRequestPayload,
            {headers: this.authService.getRequestHeaders(), responseType: "text"});
    }

    getPostById(postId: string): Observable<PostModel> {

        return this.http.get<PostModel>('http://localhost:8080/api/posts/' + postId);
    }

    updatePost(createEditPostRequestPayload: CreateEditPostRequestPayload, postId: string): Observable<any> {

        return this.http.put<any>('http://localhost:8080/api/posts/' + postId, createEditPostRequestPayload,
            {headers: this.authService.getRequestHeaders()});
    }

    deletePostById(postId: number): Observable<any> {

        return this.http.delete<any>('http://localhost:8080/api/posts/' + postId,
            {headers: this.authService.getRequestHeaders()});

    }

}