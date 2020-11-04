import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { mergeMap, retryWhen, switchMap } from 'rxjs/operators';
import { Player } from 'src/app/models/table';
import { of } from 'rxjs';

@Component({
	selector: 'app-start',
	templateUrl: './start.component.html',
	styleUrls: ['./start.component.less'],
})
export class StartComponent implements OnInit {
	player: Player;
	playerName: FormControl = new FormControl('', Validators.required);
	tableName: FormControl = new FormControl('', Validators.required);

	constructor(private _http: HttpService, private _router: Router, private _snackBar: MatSnackBar) {}

	ngOnInit(): void {}

	async createTable(): Promise<void> {
		if (this.tableName.invalid) {
			this._snackBar.open('Invalid table name.', null, { duration: 1000 });
			return;
		}
		await this.createPlayer();
		console.log(this.player);

		if (this.player !== undefined) {
			this._http.createTable(this.tableName.value).subscribe((tableId) => {
				this._router.navigate(['table', tableId]);
			});
		}
	}

	async createPlayer(): Promise<void> {
		if (this.playerName.invalid) {
			this._snackBar.open('Invalid player name.', null, { duration: 1000 });
			return;
		}
		const player: Player = await this._http.createPlayer(this.tableName.value).toPromise();
		this.player = player;
	}

	openTablesBoard(): void {
		this.createPlayer();
		this._router.navigate(['tables']);
	}
}
