import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyListComponent } from '../currency-list/currency-list.component';

const currRoutes: Routes = [
  {
    path: '',
    component: CurrencyListComponent,
  },
];

@NgModule({
  declarations: [CurrencyListComponent],
  imports: [CommonModule, RouterModule.forChild(currRoutes)],
})
export class CurrencyModule {}
