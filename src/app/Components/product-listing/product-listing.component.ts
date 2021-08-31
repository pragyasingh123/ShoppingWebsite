import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Model/item';
import { ResponseData } from 'src/app/Model/response';
import { CustomerServiceService } from 'src/app/services/customer-service.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  productItems:Item[];
  totalItems:Number;
  response:ResponseData;
  constructor(public service:CustomerServiceService) { 

  
  }

  ngOnInit(): void {
    this.getProductDetail();
  }

  getProductDetail(){
    this.service.productListing().subscribe(res=>{
        if(res!=null){
this.productItems=res as Item[];
this.totalItems=this.productItems.length;
        }

    })
  }

}
