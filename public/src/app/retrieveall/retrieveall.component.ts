import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-retrieveall',
  templateUrl: './retrieveall.component.html',
  styleUrls: ['./retrieveall.component.css']
})
export class RetrieveallComponent implements OnInit {
  restaurants: any = [];
  rate: any = [{rating: "", customer:"", comment : ""}];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.loadAllRestaurants();
  }
  loadAllRestaurants(){
    console.log("mine: LOAD ALL RESTAURANTS INFORMATION");
    let observable = this._httpService.getRestaurants();
    observable.subscribe(data => {  
      console.log("mine: ALL RESTAURANTS LOADED");
      console.log(data);
      this.restaurants = data;
      // since we need to be able to provide ratings for each restaurant, 
      // we create an ARRAY OF EMPTY RATING OBJECTS to later use them in the HTML;
      for (const key in data) {
        this.rate.push({rating: 0, customer:"", comment : ""});
      }
    })
    
  }
}
