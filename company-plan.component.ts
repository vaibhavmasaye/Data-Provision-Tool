import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-company-plan',
  templateUrl: './company-plan.component.html',
  styleUrls: ['./company-plan.component.css']
})
export class CompanyPlanComponent implements OnInit {

  productList:Product[] =[]
  constructor(private httpClient: HttpClient,
    private productService: ProductService) { }

  ngOnInit() { 
    this.productList = this.productService.getProducts()
    
  }

}
