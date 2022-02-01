import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  countryArray: {} = [];
  code: string;
  url: string;
  selectedCountry: {};
  capital: string;
  currentRoute: string;
  arr: string[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCountries();
  }

  private fetchCountries() {
    this.http.get('https://restcountries.com/v2/all').subscribe((country) => {
      this.countryArray = country;
    });
  }

  onCountrySelection(event: PointerEvent) {
    this.code = (<HTMLElement>event.target).id;
    // console.log(this.code);
    this.url = 'https://restcountries.com/v2/alpha/' + this.code;

    // api call
    this.http.get(this.url).subscribe((country: { capital: string }) => {
      this.selectedCountry = JSON.parse(JSON.stringify(country));
      console.log(this.selectedCountry);
    });
  }
}
