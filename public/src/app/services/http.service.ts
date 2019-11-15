import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }
  getRestaurants() {
    return this._http.get('/api/restaurants/retrieveall'); 
  }
  newRestaurant(data: any) {
    return this._http.post('/api/restaurants/newrestaurant', data); 
  }
  restaurantDelete(data: any) {
    return this._http.delete('/api/restaurants/Delete/' + data['id']);
  }
  restaurantEdit(id:any, data: any) {
    return this._http.post('/api/restaurants/Update/'+ id, data);
  }
  rateRestaurant(id:any, data: any) {
    return this._http.post('/api/restaurants/addrating/'+ id, data);
  }
  getById(id:any) {
    console.log("Get Restaurant by Id", id);
    return this._http.get('/api/restaurants/retrieveId/' + id); /* Same with this one */
  }
  e2endtest(num: any) {
    return this._http.post('/e2etest', num);
  }
}