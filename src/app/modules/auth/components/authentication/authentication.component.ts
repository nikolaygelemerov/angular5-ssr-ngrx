import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {HttpService} from '../../../shared/services/http/http.service';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html'
})

export class AuthenticationComponent implements OnInit {

    private url = `http://localhost:4400`;

    constructor(private http: HttpService) {}

    public ngOnInit(): void {
        this.http.get(this.url, {})
            .map((response) => {
                response.test = `test`;
                return response;
            })
            .subscribe(
                result => console.log('result: ', result),
                error => console.error(`error: `, error)
            );
    }
}
