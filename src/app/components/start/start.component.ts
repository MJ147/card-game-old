import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { flatMap, mergeMap, retryWhen, switchMap } from 'rxjs/operators';
import { Player } from 'src/app/models/table';
import { of } from 'rxjs';

@Component({
	selector: 'app-start',
	templateUrl: './start.component.html',
	styleUrls: ['./start.component.less'],
})
export class StartComponent implements OnInit {
	readonly IPN: string = 'Invalid player name, try again';
	playerName: FormControl = new FormControl('', Validators.required);

	constructor(private _http: HttpService, private _router: Router, private _snackBar: MatSnackBar) {}

	ngOnInit(): void {
		localStorage.clear();
	}

	createPlayer(): void {
		if (!this.isFormControlValid(this.playerName, this.IPN)) {
			return;
		}
		const player: Player = {
			name: this.playerName.value,
		};

		this._http.createPlayer(player).subscribe((playerId) => {
			this.setPlayerIdInLocalStorage(playerId);
			this._router.navigate(['menu']);
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
	setPlayerIdInLocalStorage(playerId: number): void {
		localStorage.setItem('playerId', playerId.toString());
	}
}
