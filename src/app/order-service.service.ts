import { Injectable } from '@angular/core';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  orders=[];
  pictures
  price
  sugar:Int32Array
  Milk:Boolean
  Quantity:number
  CId
  productPrice
  Totalprice
Namez
pricez


categories=[
{pictures:'cuppuccino.jpg',CId:1, name:'Cuppucino',price:22},
{pictures:'Latte.jpg',CId:2, name:'Latte', price:17},
{pictures:'espresso.jpg',CId:3, name:'Espressor',price:29},
{pictures:'coffie.jpg',CId:4, name:'Plain Coffe',price:30}];

  constructor() { }
  
  getneworder(){
    return this.categories

  }
  

  placeorder(name,sugar,milk,quantity,price){
   this.orders.push({Namez:name,shugarz:sugar,milkz:milk,quantitiez:quantity, pricez:price}) 
   console.log(this.orders);
  }


  ViewCategory(CId){

    let selectedCategoryID
    this.categories.forEach(categoryy =>
      {
        if (categoryy.CId == CId)
        {
          selectedCategoryID= categoryy
        }
      })
      return selectedCategoryID
   }
   Calculate( quantity){
     this.Totalprice=this.pricez*quantity
  return this.Totalprice
 }
getPrice(){
  return this.productPrice
}
getorder(){
  return this.orders
}
GetName(name){
  this.Namez=name.name;
  this.pricez=name.price;

}
getnewname(){
  return this.Namez
}
getnewprice(){
  return this.pricez
}
}


