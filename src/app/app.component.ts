import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sideBarOpen = true;
  countryArray: {} = [];
  code: string;
  url: string;
  selectedCountry: { status: number };
  displaySpinner = false;
  displayNoData = false;

  constructor(private http: HttpClient, private AppService: AppService) {}

  ngOnInit() {
    this.fetchCountries();
  }

  onToggle() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  private fetchCountries() {
    //api call ---------This will give you list of country names for dropdown items
    this.http.get('https://restcountries.com/v2/all').subscribe((country) => {
      this.countryArray = country;
    });
  }

  onCountrySelection(event: string) {
    this.displaySpinner = true;
    this.displayNoData = false;
    this.code = event;
    this.url = 'https://restcountries.com/v2/alpha/' + this.code;

    // api call --------- This will give you details of the selected country from the dropdown
    this.http.get(this.url).subscribe((country) => {
      this.selectedCountry = JSON.parse(JSON.stringify(country));
      if (this.selectedCountry.status === 400) {
        this.displayNoData = true;
      }
      this.AppService.addData(this.selectedCountry);
      this.displaySpinner = false;
    });
  }
}
