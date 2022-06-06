import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostModel} from "./postModel";
import {CreatePostRequestPayload} from "../../post/post-create/createPostRequestPayload";
import {AuthService} from "../../auth/service/auth.service";
import {LocalStorageService} from "ngx-webstorage";

@Injectable({
    providedIn: 'root'
})

export class PostService {

    dataUpdated:EventEmitter<any> = new EventEmitter();

    constructor(private http: HttpClient, private localStorage: LocalStorageService) {
    }

    getAllPosts(): Observable<Array<PostModel>> {

        return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts/getAllPosts');
    }

    getPostsByCommunityName(communityName): Observable<Array<PostModel>> {

        return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts/communityName=' + communityName);
    }

    createPost(createPostRequestPayload: CreatePostRequestPayload): Observable<any> {

        let reqHeaders = new HttpHeaders({'Authorization': 'Bearer ' +
                this.localStorage.retrieve('authToken')});

        return this.http.post('http://localhost:8080/api/posts/createPost', createPostRequestPayload,
            {headers: reqHeaders, responseType: "text"});
    }


}