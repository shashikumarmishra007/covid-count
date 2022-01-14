import { Component, OnInit } from '@angular/core';
import { ApiStateCasesService } from '../core-service/api-state-cases.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private stateCase:ApiStateCasesService) {
  }
  displayedColumns = ['loc','totalConfirmed', 'deaths', 'discharged' ];
  ELEMENT_DATA:any;
  lastUpdate:any;
  expandedElement:any;

  ngOnInit(): void {
    this.stateCase.getCovidCase().
	subscribe((result:any)=>{
		console.log(result);
		this.ELEMENT_DATA = result.data.regional.map((data:any) =>{
      return {
        "loc": data.loc,
        "confirmedCasesIndian": data.confirmedCasesIndian,
        "confirmedCasesForeign": data.confirmedCasesForeign,
        "discharged": data.discharged,
        "deaths": data.deaths,
        "totalConfirmed": data.totalConfirmed,
        "dethRatio":((data.deaths/data.totalConfirmed)),
        "showDetails":false
    }
  });
    this.lastUpdate = result.lastOriginUpdate;
	});
  }

  clicked():void {
    console.log("yes it got clicked");
  }

}
