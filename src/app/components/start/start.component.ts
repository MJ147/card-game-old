import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
	selector: 'app-start',
	templateUrl: './start.component.html',
	styleUrls: ['./start.component.less'],
})
export class StartComponent implements OnInit {
	constructor(private _http: HttpService) {}

	ngOnInit(): void {}

	createTable(): void {
		this._http.createTable('table1').subscribe((table) => {
			console.log(table);
		});
	}
}
