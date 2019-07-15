import { Component, OnInit } from '@angular/core';
import {OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.page.html',
  styleUrls: ['./neworder.page.scss'],
})
export class NeworderPage implements OnInit {
oders=[];
category

  constructor(public ordersreviceService:OrderServiceService) {
this.category=this.ordersreviceService.getneworder()
   }
 
  ngOnInit() {
  }

}
