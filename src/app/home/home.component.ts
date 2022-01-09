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
  displayedColumns = ['statecode','active', 'confirmed', 'deltaconfirmed', 'deltadeaths'];
  ELEMENT_DATA:any;

  ngOnInit(): void {
    this.stateCase.getCovidCase().
	subscribe((result:any)=>{
		console.log(result);
		this.ELEMENT_DATA = result.statewise;
	});
  }

  clicked():void {
    console.log("yes it got clicked");
  }

}
