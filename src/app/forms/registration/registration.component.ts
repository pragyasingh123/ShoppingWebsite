import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { PasswordStrengthChecker } from 'src/app/utility/custom-validation/password-strength';
import { Router } from '@angular/router';
import { RegistrationRequest } from 'src/app/Model/registration';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { ResponseData } from 'src/app/Model/response';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  testNumber:number;
  constructor(public formGroup:FormBuilder, public route:Router, public customerService:CustomerServiceService) {

    this.testNumber=4;
   }
  isSubmit:boolean=false;
  registerText:string="Register";
  response :ResponseData;
 
  afterSubmission: boolean=false;
 registerRequest:RegistrationRequest;

  ngOnInit(): void {
  }
  
  formReset:any=this.formGroup.group({
    userFirstName :new FormControl(''),
    userLastName :new FormControl(''),
    userPhoneNumber:new FormControl(''),
    userRepeatPassword:new FormControl(''),
    userPassword:new FormControl('',[Validators.required]),
    userCountry:new FormControl(''),
    userCity:new FormControl(''),
    userEmail : new FormControl('',[Validators.required,Validators.email])

  })

  formSubmit(){
   this.isSubmit=true;
   
      var data =this.formReset.value;
      if(data!=null){
       this.registerRequest= new RegistrationRequest();
       this.registerRequest.city=data.userCity;
       this.registerRequest.firstName=data.userFirstName;
       this.registerRequest.lastName=data.userLastName;
       this.registerRequest.country=data.userCountry;
       this.registerRequest.city=data.userCity;
       this.registerRequest.emailID=data.userEmail;
       this.registerRequest.password=data.userPassword;
       this.registerUser(this.registerRequest);
      }
    
    
  }

  registerUser(registerRequest: any){
    this.customerService.registerCustomer(registerRequest).subscribe(res=>{
      if(res!=null ){
       this.response= res as ResponseData;
       if(this.response.ResponseCode==200){
           this.afterSubmission=true;
       }
      }
    })
  }











  
  formSubmission(){
     
this.isSubmit=true;
    if(this.formReset.valid){
   
     
    }
    
    
      }
  

}
