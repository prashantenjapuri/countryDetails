import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
// import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  selectedCountry: any;
  constructor(private AppService: AppService) {}

  ngOnInit() {
    this.AppService.sendSelcetedCountryName
      .asObservable()
      .subscribe((result) => {
        this.selectedCountry = result;
      });
  }
}
