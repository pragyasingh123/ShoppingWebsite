import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './forms/registration/registration.component';
import { LoginComponent } from './forms/login/login.component';
import { FourNotFourComponent } from './Component/four-not-four/four-not-four.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ProductListingComponent } from './Components/product-listing/product-listing.component';

const routes: Routes = [
  {path:'user/registration' , component:RegistrationComponent,
  data:{title:'Registration'}
  },
  {path:'user/login',component:LoginComponent,
  data:{
  title:'Login'
  }},
  {path:'',component:ProductListingComponent,
   data:{
     title:'MainWebsite'
   }},
  {path:'parent',component:ParentComponentComponent},
  {path:'**',component:FourNotFourComponent},
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
