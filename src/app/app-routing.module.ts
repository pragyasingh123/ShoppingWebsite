import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './forms/registration/registration.component';
import { LoginComponent } from './forms/login/login.component';
import { FourNotFourComponent } from './Component/four-not-four/four-not-four.component';
const routes: Routes = [
  {path:'user/registration' , component:RegistrationComponent,
  data:{title:'Registration'}
  },
  {path:'user/login',component:LoginComponent,
  data:{
  title:'Login'
  }},
  {path:'',component:LoginComponent,
   data:{
     title:'MainWebsite'
   }},
  {path:'**',component:FourNotFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
