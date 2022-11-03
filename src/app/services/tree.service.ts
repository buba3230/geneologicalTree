import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Family } from '../family-tree/models/family.model';




@Injectable()
export class TreeService {
    private url = '/api/tree';
    constructor(public http: HttpClient) { }

    getTree(): Observable<Family> {
        return this.http.get<Family>(this.url)
            .pipe(
                tap(_ => console.log('fetched tree')),
                catchError((error) => throwError(`Server do not response. Error : ${error.toString()}`))
            );
    }

}