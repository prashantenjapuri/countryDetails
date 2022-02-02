import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css'],
})
export class CurrencyListComponent implements OnInit {
  selectedCountry: {
    currencies: { name: string; code: string; symbol: string };
  };
  currency: { name: string; code: string; symbol: string };

  constructor(private AppService: AppService) {}

  ngOnInit() {
    this.AppService.sendSelcetedCountryName
      .asObservable()
      .subscribe((result) => {
        this.selectedCountry = result;
        this.currency = this.selectedCountry.currencies;
      });
  }
}
