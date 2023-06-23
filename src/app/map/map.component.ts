import { Component } from '@angular/core';
import { WorldBankService } from '../Services/world-bank.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  selectedCountry: any;
  countries: any[];

  constructor(private worldBankService: WorldBankService) { }

  onCountryHover(event: any, countryName: string) {
    this.selectedCountry = countryName;

    this.worldBankService.getCountryInfo(countryName).subscribe({
  next: (data) => {
    this.selectedCountry = data;
    console.log(data);
    
  },
  error: (error) => {
    console.log(error);
  },
  complete: () => {
    
  }
});
  }

  onCountryHoverEnd(event: any) {
    this.selectedCountry = null;
  }
}
