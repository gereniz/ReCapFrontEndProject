import { Component, OnInit } from '@angular/core';

import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandUpdateForm : FormGroup;

  constructor(private formBuilder : FormBuilder,private brandService : BrandService) { }

  ngOnInit(): void {
    this.createBrandAddForm()
  }
  createBrandAddForm(){
    this.brandUpdateForm = this.formBuilder.group({
      brandname : ["",Validators.required]
    })
  }

  update(){
    if(this.brandUpdateForm.valid){
      let brandModel = Object.assign({},this.brandUpdateForm.value);
      this.brandService.add(brandModel).subscribe((response)=>{
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
  }nit(): void {
  }

}
