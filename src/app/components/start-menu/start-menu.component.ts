import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { flatMap, mergeMap, retryWhen, switchMap } from 'rxjs/operators';
import { Player } from 'src/app/models/table';
import { of } from 'rxjs';

@Component({
	selector: 'app-start-menu',
	templateUrl: './start-menu.component.html',
	styleUrls: ['./start-menu.component.less'],
})
export class StartMenuComponent implements OnInit {
	readonly ITN: string = 'Invalid table name, try again';
	player: Player;
	playerName: FormControl = new FormControl('', Validators.required);
	tableName: FormControl = new FormControl('', Validators.required);

	constructor(private _http: HttpService, private _router: Router, private _snackBar: MatSnackBar) {}

	ngOnInit(): void {}

	createTable(): void {
		if (!this.isFormControlValid(this.tableName, this.ITN)) {
			return;
		}
		const player: Player = {
			name: this.playerName.value,
		};
		this._http.createTable(this.tableName.value, this.playerIdFromLocalStorage).subscribe((tableId) => {
			this._router.navigate(['table', tableId]);
		});
	}

	openTablesBoard(): void {
		this._router.navigate(['tables']);
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
