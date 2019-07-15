import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../order-service.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
coffee=[];

  constructor(public orderserviceService:OrderServiceService) {
    this.coffee=this.orderserviceService.getorder();
   }

  ngOnInit() {
  }

}
