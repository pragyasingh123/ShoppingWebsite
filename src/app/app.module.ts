import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { FormsComponent } from './forms/forms.component';
import { BasePathDirective } from './custom-directive/base-path.directive';
import { RegistrationComponent } from './forms/registration/registration.component';
import { LoginComponent } from './forms/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FourNotFourComponent } from './Component/four-not-four/four-not-four.component';

import {httpInterceptorProviders} from './utility/http-interceptors/interceptors-provider';
import { CustomPipePipe } from './utility/pipes/custom-pipe.pipe';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './parent-component/child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormsComponent,
    BasePathDirective,
    RegistrationComponent,
    LoginComponent,
    FourNotFourComponent,
    CustomPipePipe,
    ParentComponentComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Title,httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
