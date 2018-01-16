import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MessageService {

    private thread = new Subject<string>();
    public messages: Observable<string> = this.thread.asObservable();

    public set(value: string) {
        this.thread.next(value);
    }
}
