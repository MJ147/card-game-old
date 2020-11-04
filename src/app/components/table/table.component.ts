import { HttpService } from './../../services/http/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.less'],
})
export class TableComponent implements OnInit {
	constructor(private _http: HttpService) {}

	ngOnInit(): void {}
}
