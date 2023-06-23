import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WorldBankService {
  private apiUrl = 'https://api.worldbank.org/v2/country';

  constructor(private http: HttpClient) { }

  getCountryInfo(countryName: string) {
    const url = `${this.apiUrl}/${countryName}?format=json`;
    return this.http.get<any>(url).pipe(
      tap(response => console.log(response)), 
      map(response => {
        const countryData = response[1][0];
        if (countryData) {
          return {
            name: countryData.name,
            capital: countryData.capitalCity,
            region: countryData.region.value,
            incomeLevel: countryData.incomeLevel.value,
            latitude: countryData.latitude,
            longitude: countryData.longitude
          };
        }
        throw new Error('Country not found');
      })
    );
  }
  
  
}