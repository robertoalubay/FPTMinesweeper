import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FptMinesweeperComponent } from './fpt-minesweeper/fpt-minesweeper.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: FptMinesweeperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
