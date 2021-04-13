import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';
import { CustomerService } from './services/customer.service';

const routes: Routes = [
  {path : "" , pathMatch:"full",component: CarComponent},
  {path : "cars" , component : CarComponent},
  {path : "cars/brand/:brandid" , component : CarComponent},
  {path : "cars/color/:colorid", component: CarComponent},
  {path : "customers", component:CustomerComponent},
  {path : "rental" , component:RentalComponent},
  {path : "cars/:id", component : CarDetailComponent},
  {path : "payment", component : PaymentComponent},
  {path : "car/add" , component : CarAddComponent},
  {path : "brand/add" , component : BrandAddComponent},
  {path : "brand/update" , component : BrandUpdateComponent},
  {path : "color/add" ,component : ColorAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
