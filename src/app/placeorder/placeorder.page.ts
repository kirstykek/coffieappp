import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../order-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.page.html',
  styleUrls: ['./placeorder.page.scss'],
})
export class PlaceorderPage implements OnInit {
name
milk
quantity
sugar
order
CId
totalprice 
  constructor(public ordersreviceService:OrderServiceService, public route: ActivatedRoute) { 
   }

  getMilk(event){
     this.milk=event.detail.value    
  }

  getQuantity(event){
this.quantity=event.detail.value


  }
  getprice(event){
    this.totalprice=event.detail.value

  }
  //getName(event){
//this.name=event.detail.value
  //}
 getSugar(event){
   this.sugar = event.detail.value

  }
  ngOnInit() {
    this.route.paramMap.subscribe(params=>
      {
        this.CId=params.get('CId')
        this.order=this.ordersreviceService.ViewCategory(this.CId)
        console.log(this.order);
        this.totalprice = this.order.price
        
      })


  }
  placeorder(){
    this.ordersreviceService.placeorder(
     this.name,
     this.sugar,
    this.milk,
     this.quantity,
     this.ordersreviceService.Calculate(this.quantity))
  }

  ViewCategory(CId){
    this.ordersreviceService. ViewCategory(CId)
  }
  Calculate(){
  this.totalprice = this.totalprice * this.quantity

}
}
