import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';


@Component({
  selector: 'app-company1',
  templateUrl: './company1.component.html',
  styleUrls: ['./company1.component.css']
})
export class Company1Component implements OnInit {
  @Input() productItem:Product
  constructor(private msg:MessengerService) { }

  ngOnInit() {
    console.log(this.productItem);
  }
handleAddToCart(){
  this.msg.sendMsg(this.productItem)
}

}
