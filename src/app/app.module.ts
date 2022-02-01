import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LanguageListComponent } from './language-list/language-list.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'language', component: LanguageListComponent },
  { path: 'currency', component: CurrencyListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LanguageListComponent,
    CurrencyListComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
