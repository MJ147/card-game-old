import { MatSnackBar } from '@angular/material/snack-bar';
import { Player, Table } from './../../models/table';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-tables-board',
	templateUrl: './tables-board.component.html',
	styleUrls: ['./tables-board.component.less'],
})
export class TablesBoardComponent implements OnInit {
	tableName: FormControl = new FormControl('', Validators.required);
	tables: Table[];

	constructor(private _http: HttpService, private _router: Router, private _snackBar: MatSnackBar) {}

	ngOnInit(): void {
		this.getAllTables();
	}

	getAllTables(): void {
		this._http.getAllTables().subscribe((tables) => {
			this.tables = tables;
		});
	}
	openTable(table: Table): void {
		this._router.navigate(['table', table.id]);
	}

	createTable(): void {
		if (this.tableName.invalid) {
			this._snackBar.open('Invalid table name.', null, { duration: 1000 });
			return;
		}
		this._http.createTable(this.tableName.value).subscribe((tableId) => {
			this._router.navigate(['table', tableId]);
		});
	}
}
