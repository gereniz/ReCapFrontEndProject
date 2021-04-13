import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { CartSummaryService } from 'src/app/services/cart-summary.service';
import { Car } from '../../modules/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars : Car[] = [];
  dataLoaded = false;
  filterText = "";

  constructor(private carService : CarService , private activatedRoute : ActivatedRoute,
    private cartSummaryService : CartSummaryService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["brandid"]){
        this.getCarsByBrand(params["brandid"]);
      }
      else if(params["colorid"]){
          this.getCarsByColor(params["colorid"]);
      }
      else{
        this.getCars();
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe((response) =>{
      this.cars = response.data
      this.dataLoaded= true
    })
  }

  getCarsByBrand(brandid:number) {
    this.carService.getCarsByBrand(brandid).subscribe((response) => {  
      this.cars= response.data 
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorid:number) {
    this.carService.getCarsByColor(colorid).subscribe((response) => {  
      this.cars = response.data 
      this.dataLoaded = true;
    });
  }

  addToCart(car : Car){
    this.cartSummaryService.addToCart(car);
  }
}
