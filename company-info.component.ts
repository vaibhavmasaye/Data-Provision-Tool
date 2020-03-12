import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  companyinfo: any = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("assets/company.json").subscribe(data =>{
      this.companyinfo = data;
    })
  }

}
