import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiStateCasesService {

  constructor(private httpClient:HttpClient) { }
  public getCovidCase<Observable>() {
    return this.httpClient.get("https://api.rootnet.in/covid19-in/stats/latest");
  }
}
