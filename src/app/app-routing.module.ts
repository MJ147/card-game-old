import { TablesBoardComponent } from './components/tables-board/tables-board.component';
import { TableComponent } from './components/table/table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
	{ path: '', component: StartComponent },
	{ path: 'table/:id', component: TableComponent },
	{ path: 'tables', component: TablesBoardComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
