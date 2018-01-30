import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http';

import {CONTENT_TYPE} from './../../constants/request-headers';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpService {

    // same as new HttpHeaders({'Content-Type', CONTENT_TYPE})
    private requestHeaders: HttpHeaders = new HttpHeaders().append('Content-Type', CONTENT_TYPE);
    private requestParams: HttpParams = new HttpParams().set('name', 'Ivan');

    constructor(private http: HttpClient) {}

    public get(url: string, params: any = {}): Observable<any> {
        return this.http.get(url, {
            headers: this.requestHeaders,
            observe: 'body', // can observe events (type 0 for request initialize,
            // type 1 for data upload,
            // type 3 for data download), very usefull for files
            responseType: 'json', // blob / file, arrayBuffer / for buffering, json / json, text / text
            params: this.requestParams
        });
    }

    public createHttpRequest(requestType: string, url: string, sendData: any,  params: HttpParams): Observable<any> {
        const request: HttpRequest<any> = new HttpRequest(requestType, url, sendData, {reportProgress: true, params});

        return this.http.request(request);
    }
}
