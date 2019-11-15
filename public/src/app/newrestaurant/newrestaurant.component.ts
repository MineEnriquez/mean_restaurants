import { Component, OnInit } from '@angular/core';
import { HttpService } from "../services/http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-newrestaurant',
  templateUrl: './newrestaurant.component.html',
  styleUrls: ['./newrestaurant.component.css']
})
export class NewrestaurantComponent implements OnInit {
  newrestaurant: any= {name: "", cusine : "", };
  submitted: boolean;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log("mine: NEW CAKE", this.newrestaurant);
    this.submitted=true;
    let observable = this._httpService.newRestaurant(this.newrestaurant);
    observable.subscribe(data => {  
      console.log("New task created:", data);


      // this.newrestaurant = {name: "Enter a valid name", cusine : "Enter a valid url"};
      // this.submitted = true;
      this._router.navigate(['/restaurants']);
    
    })
  }
  onCancel(){
    this._router.navigate(['/restaurants']);
  }
}
