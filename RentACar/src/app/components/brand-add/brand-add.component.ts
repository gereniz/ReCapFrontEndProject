import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { BrandService } from 'src/app/services/brand.service';


@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm : FormGroup;

  constructor(private formBuilder : FormBuilder,private brandService : BrandService) { }

  ngOnInit(): void {
    this.createBrandAddForm()
  }
  createBrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      brandname : ["",Validators.required]
    })
  }

  add(){
    if(this.brandAddForm.valid){
      let brandModel = Object.assign({},this.brandAddForm.value);
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
  }

}
