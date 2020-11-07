import { MatSnackBar } from '@angular/material/snack-bar';
import { Table } from './../../models/table';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-tables-board',
	templateUrl: './tables-board.component.html',
	styleUrls: ['./tables-board.component.less'],
})
export class TablesBoardComponent implements OnInit {
	readonly ITN: string = 'Invalid table name, try again';
	tableName: FormControl = new FormControl('', Validators.required);
	tables: Table[];

	constructor(private _http: HttpService, private _router: Router, private _snackBar: MatSnackBar) {}

	ngOnInit(): void {
		this.getAllTables();
	}

	getAllTables(): void {
		this._http.getAllTables().subscribe((tables) => {
			this.tables = tables;
			console.log(tables);
		});
	}
	joinTable(table: Table): void {
		this._http.addPlayer(table.id.toString(), localStorage.getItem('playerId')).subscribe(() => {
			this._router.navigate(['table', table.id]);
		});
	}

	createTable(): void {
		if (!this.isFormControlValid(this.tableName, this.ITN)) {
			return;
		}
		this._http.createTable(this.tableName.value, this.playerIdFromLocalStorage).subscribe((tableId) => {
			this._router.navigate(['table', tableId]);
		});
	}

	isFormControlValid(formControl: FormControl, message: string): boolean {
		if (formControl.invalid) {
			this._snackBar.open(message, null, { duration: 1000 });
			return false;
		}
		return true;
	}

	// TODO: change temporary solution with local storage to BEARER
	get playerIdFromLocalStorage(): string {
		return localStorage.getItem('playerId');
	}
}
