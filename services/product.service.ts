import { Injectable } from '@angular/core';
import{ Product } from 'src/app/models/product'
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 products:Product[]=[
   new Product(1,'ISD Pack 18','Enjoy ISD calling at discounted rates for 28 days. For country wise tariff visit www.airtel.in.',18.00,28),
   new Product(2,'Combo 3G / 4G Data Pack','Data @ Rs.0.5/1.0MB. All Calls (excl. Roaming Calls) @ 2.5 p/sec. All Video Calls @ Rs.5.0 p/sec. Local SMS @ Rs.1.0/sms. STD SMS @ Rs.1.5/sms. ISD SMS @ Rs.5.0/sms. (price per day: Rs. 1.6).',45.00,28), 
   new Product(3,'200 MB Combo 3G / 4G Data Pack','Enjoy TRULY unlimited Local, STD & Roaming calls on any network, 200 MB data for 2 days.',149.00,28),
   new Product(4,'2 GB Combo 3G / 4G Data Pack','Enjoy TRULY unlimited Local, STD & Roaming calls on any network, 2 GB data, 300 National SMS for 28 days.',170.00,28),
   new Product(5,'International Roaming Pack 496','Incoming Calls (during Int. Roaming): Unlimited. Local Calls (during Int. Roaming) / Calls to India: 100 minutes. Outgoing SMS while Int. Roaming: 100 SMS. Data (during Int. Roaming): 500 MB. (price per day: Rs. 496.0).',496.00,1),
   new Product(6,'International Roaming Pack 648','Incoming Calls (during Int. Roaming): 100 minutes. Local Calls (during Int. Roaming) / Calls to India: 100 minutes. Outgoing SMS while Int. Roaming: 100 SMS. Data (during Int. Roaming): 500 MB. (price per day: Rs. 648.0). ',648.00,1),
   new Product(7,'1.5 GB / Day Combo 3G / 4G Data Pack','Enjoy TRULY unlimited Local, STD & Roaming calls on any network, 2 GB data, 300 National SMS for 28 days.',598.00,84), 
   new Product(8,'International Roaming Pack 648','3G-4G Data: 1.5 GB / Day. Calls: Unlimited. SMS: 100 SMS / Day. FRC/SRC - Applicable only for new subscribers. This pack may not be available for recharge.. (price per day: Rs. 7.7)',698.00,84),
 ]
  constructor() { }

 
  
  getProducts():Product[]{ 
    return this.products
  }

  

  getDetails():Observable<Product[]>{ 
    return of(this.products);
  }
}
