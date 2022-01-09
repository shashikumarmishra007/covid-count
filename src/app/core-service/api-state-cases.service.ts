import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiStateCasesService {

  constructor(private httpClient:HttpClient) { }
  public getCovidCase () {
    return this.httpClient.get("https://data.covid19india.org/data.json");
  }
}
