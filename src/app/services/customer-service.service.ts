import { Injectable } from '@angular/core';
import { HttpClientserviceService } from './http-clientservice.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private httpClientService: HttpClientserviceService) { }

  registerCustomer(request:any){
   return this.httpClientService.HttpPostRequest(request,"http://localhost:60084/api/user/registration")
  }

  productListing(){
    return this.httpClientService.HttpGetRequest("https://fakestoreapi.com/products");
  }

}
