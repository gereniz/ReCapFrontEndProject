import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm : FormGroup;

  constructor(private formBuilder : FormBuilder ,private colorService : ColorService) { }

  ngOnInit(): void {
    this.createColorAddForm()
  }

  createColorAddForm(){
    this.colorAddForm = this.formBuilder.group({
      colorname : ["",Validators.required]
    })
  }
  
  add(){
    if(this.colorAddForm.valid){
      let colorModel = Object.assign({},this.colorAddForm.value)
      this.colorService.add(colorModel).subscribe(data=>{
        console.log(data);
        //this.toastrService.success(data.message,"Başarılı")
      },dataError => {
        console.log(dataError.error);
        //this.toastrService.error(dataError.error)
      });
      
    }
    else{
      //this.toastrService.error("Formunuz Eksik","Dikkat")
    }
  }
}
