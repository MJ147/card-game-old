import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from '../../models/table';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class HttpService {
	readonly baseUrl: string = 'http://localhost:8080/';

	constructor(private _http: HttpClient) {}

	createTable(tableName: string): Observable<Table> {
		return this._http.post<Table>(this.baseUrl + 'table/', null, { params: { name: tableName } });
	}
}
