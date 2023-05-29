import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {PostModel} from "./postModel";
import {CreateEditPostRequestPayload} from "../../post/post-create-edit/createEditPostRequestPayload";
import {AuthService} from "../../auth/service/auth.service";
import {LocalStorageService} from "ngx-webstorage";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class PostService {

    apiURL: string = environment.apiURL;

    constructor(private http: HttpClient, public authService: AuthService) {
    }

    getAllPosts(): Observable<Array<PostModel>> {

        return this.http.get<Array<PostModel>>(this.apiURL + '/api/posts/getAllPosts?sortBy=hot');
    }

    getPostsByCommunityName(communityName): Observable<Array<PostModel>> {

        return this.http.get<Array<PostModel>>(this.apiURL + '/api/posts/communityName=' + communityName);
    }

    createPost(createEditPostRequestPayload: CreateEditPostRequestPayload): Observable<any> {

        return this.http.post(this.apiURL + '/api/posts/createPost', createEditPostRequestPayload,
            {headers: this.authService.getRequestHeaders(), responseType: "text"});
    }

    getPostById(postId: string): Observable<PostModel> {

        return this.http.get<PostModel>(this.apiURL + '/api/posts/' + postId);
    }

    updatePost(createEditPostRequestPayload: CreateEditPostRequestPayload, postId: string): Observable<any> {

        return this.http.put<any>(this.apiURL + '/api/posts/' + postId, createEditPostRequestPayload,
            {headers: this.authService.getRequestHeaders()});
    }

    deletePostById(postId: number): Observable<ArrayBuffer> {

        return this.http.delete<ArrayBuffer>(this.apiURL + '/api/posts/' + postId,
            {headers: this.authService.getRequestHeaders(), observe: 'body', responseType: 'text' as 'json'});

    }

    searchPost(url: string): Observable<any> {
        return this.http.get(url);
    }

}