import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css'],
})
export class LanguageListComponent {
  selectedCountry: { languages: { name: string; nativeName: string } };
  languages: { name: string; nativeName: string };

  constructor(private AppService: AppService) {}

  ngOnInit() {
    this.AppService.sendSelcetedCountryName
      .asObservable()
      .subscribe((result) => {
        this.selectedCountry = result;
        this.languages = this.selectedCountry.languages;
      });
  }
}
