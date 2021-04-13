import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm : FormGroup;

  constructor(private formBuilder:FormBuilder,private carService : CarService) { }

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      brandid : ["",Validators.required],
      colorid : ["",Validators.required],
      modelyear : ["",Validators.required],
      dailyprice : ["",Validators.required],
      description :["",Validators.required]
    })
  }

  add(){
    if(this.carAddForm.valid){
      let carModel = Object.assign({},this.carAddForm.value);
      this.carService.add(carModel).subscribe((response)=>{
        //this.toastrService.success(response.message,"Başarılı")
        console.log(response);
      },(responseError) =>{
        console.log(responseError.error);
        //this.toastrService.error(responseError.error)
      })
    }
    else{
      //this.toastrService.error("Formunuz Eksik","Dikkat")
    }
  }

  

}
