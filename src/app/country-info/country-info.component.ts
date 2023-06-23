import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent {
  @Input() selectedCountry: {
    name: string;
    capital: string;
    region: string;
    incomeLevel: string;
    latitude: string;
    longitude: string;
  };
}
