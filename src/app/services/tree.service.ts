import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Family } from '../family-tree/models/family.model';




@Injectable()
export class TreeService {
    private url = '/api/tree';
    constructor(public http: HttpClient) { }

    getTree(): Observable<Family> {
        return this.http.get<Family>(this.url)
            .pipe(
                map(tree => tree[0]),
                tap(_ => console.log('fetched tree')),
                catchError((error) => throwError(`GET => Server do not response. Error : ${error.toString()}`))
            );
    }

    clearTree(id: number): Observable<any> {
        return this.http.delete<Family>(this.url + '/' + id)
            .pipe(
                tap(leaf => console.log('Node with id: ' + leaf.id + ' was delete')),
                catchError((error) => throwError(`Delete => Server do not response. Error : ${error.toString()}`))
            )
    }

    createRoot(newRoot: Family): Observable<Family> {
        return this.http.post<Family>(this.url, newRoot).pipe(
            map(tree => tree[0]),
            tap(_ => console.log('added tree root')),
            catchError((error) => throwError(`Server do not response. Error : ${error.toString()}`))
        );
    }

}