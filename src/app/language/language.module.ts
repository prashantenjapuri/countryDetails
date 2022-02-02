import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LanguageListComponent } from '../language-list/language-list.component';

const langRoutes: Routes = [
  {
    path: '',
    component: LanguageListComponent,
  },
];

@NgModule({
  declarations: [LanguageListComponent],
  imports: [CommonModule, RouterModule.forChild(langRoutes)],
})
export class LanguageModule {}
