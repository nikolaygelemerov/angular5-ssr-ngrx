import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {HttpParams} from '@angular/common/http';

import {HttpService} from '../../../shared/services/http/http.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html'
})

export class SignInComponent implements OnInit {

    private url = `http://localhost:4400`;
    private params: any = {
        'POST': new HttpParams().set('post', 'postValue'),
        'GET': new HttpParams().set('get', 'getValue'),
        'PUT': new HttpParams().set('put', 'putValue'),
        'DELETE': new HttpParams().set('delete', 'deleteValue')
    };

    private sendData: any = {
        'POST': {post: 'postData'},
        'GET': {get: 'getData'},
        'PUT': {put: 'putData'},
        'DELETE': {del: 'deleteData'}
    };

    constructor(
        private router: Router,
        private http: HttpService
    ) {}

    public ngOnInit(): void {}

    public makeRequest(requestType: string): void {
        this.http.createHttpRequest(requestType, this.url, this.sendData[requestType], this.params[requestType])
            .subscribe(
                result => console.log('result: ', result),
                error => console.error(error)
            );
    }

}
