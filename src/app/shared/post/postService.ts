import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostModel} from "./postModel";
import {CreateEditPostRequestPayload} from "../../post/post-create-edit/createEditPostRequestPayload";
import {AuthService} from "../../auth/service/auth.service";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class PostService {

    apiURL: string = environment.apiURL;

    constructor(private http: HttpClient, public authService: AuthService) {
    }

    getAllPosts(sortBy: string): Observable<Array<PostModel>> {

        return this.http.get<Array<PostModel>>(this.apiURL + '/api/posts/getAllPosts?sortBy=' + sortBy);
    }

    getPostsByCommunityName(communityName: string, sortBy: string): Observable<Array<PostModel>> {

        return this.http.get<Array<PostModel>>(this.apiURL + '/api/posts/communityName=' + communityName +
            '?sortBy=' + sortBy);
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