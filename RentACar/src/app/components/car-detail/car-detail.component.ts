import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/modules/car';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car : Car[] = [];
  constructor(private cardetailService : CarDetailService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["id"]){
        this.getCar(params["id"]);
      }
      
    })
  }

  getCar(id : number){
    this.cardetailService.getCar(id).subscribe((response)=>{
      this.car = response.data
    });
  }


}
