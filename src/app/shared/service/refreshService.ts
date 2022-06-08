import {BehaviorSubject, Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class RefreshService {

    private refresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public getRefresh(): Observable<boolean> {

        return this.refresh.asObservable();
    }

    public setRefresh(value: boolean): void {

        this.refresh.next(value);
    }

}