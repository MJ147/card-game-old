import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	imports: [CommonModule],
	exports: [MatButtonModule, MatExpansionModule, ReactiveFormsModule, MatInputModule, MatSnackBarModule, MatCardModule],
})
export class MaterialModule {}
