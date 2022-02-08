import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoDataComponent } from './no-data/no-data.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'language',
    loadChildren: () =>
      import('./language/language.module').then((x) => x.LanguageModule),
  },
  {
    path: 'currency',
    loadChildren: () =>
      import('./currency/currency.module').then((x) => x.CurrencyModule),
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpinnerComponent,
    PageNotFoundComponent,
    NoDataComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
