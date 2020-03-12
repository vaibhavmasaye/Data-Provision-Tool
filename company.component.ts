import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessengerService } from '../services/messenger.service';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  
  cartItems =[];
  companys: any = [];
  companyinfo: any = [];
  carTotal =0
  constructor(private httpClient: HttpClient,
    private msg:MessengerService,
    private service: ProductService
  ) { }

  ngOnInit() {
    this.httpClient.get("assets/data.json").subscribe(data =>{
      this.companys = data;
    })
    this.httpClient.get("assets/company.json").subscribe(data =>{
      this.companyinfo = data;
    })

    this.msg.getMsg().subscribe((product: Product) =>{
      this.cartItems.push({
       productName: product.planename,
        qty:1,
        price:product.price
      })
      this.carTotal =0
     })

     /*this.getDetails();*/
  }

  /*getDetails(): void {
    this.service.getDetails()
        .subscribe(products => this.products = products);
  }*/

}
