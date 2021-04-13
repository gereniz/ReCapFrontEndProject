import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../modules/car';
import { ListResponseModel } from '../modules/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:7519/api/";

  constructor(private httpClient : HttpClient) { }

  
  getCar(id : number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "car/getbyid?id="+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  GetImage() {
    return this.apiUrl
  }
    
}
