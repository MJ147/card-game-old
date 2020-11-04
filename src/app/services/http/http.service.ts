import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player, Table } from '../../models/table';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root',
})
export class HttpService {
	readonly baseUrl: string = 'http://localhost:8080/';

	constructor(private _http: HttpClient) {}

	createTable(name: string): Observable<number> {
		return this._http
			.post<number>(this.baseUrl + 'table/', null, { params: { name } })
			.pipe(
				catchError((err) => {
					return throwError(err.error.errorMsg);
				}),
			);
	}

	getAllTables(): Observable<Table[]> {
		return this._http.get<Table[]>(this.baseUrl + 'table/all');
	}

	createPlayer(name: string): Observable<Player> {
		return this._http
			.post<Player>(this.baseUrl + 'player/', { name })
			.pipe(
				catchError((err) => {
					return throwError(err.error.errorMsg);
				}),
			);
	}
}
