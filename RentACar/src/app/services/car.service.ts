import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../modules/listResponseModel';
import { Car } from '../modules/car';
import { ResponseModel } from '../modules/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:7519/api/car/";

  constructor(private httpClient : HttpClient) { }

  getCars() : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandid : number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "getbybrandid?id="+brandid;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorid : number) : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "getbycolorid?id="+colorid;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  add(car : Car): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",car);
  }

 
}
