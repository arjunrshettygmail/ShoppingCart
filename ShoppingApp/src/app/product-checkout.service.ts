import { Injectable } from '@angular/core';
import { Product } from './Model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCheckoutService {

  public amount:number = 0;
  public shippingAmount:number = 0;
  public totalAmount:number = 0;
  public cart:Product[]
  public products:Product[]
  apiURL: string = 'http://localhost:56036/api/shoppingCart/';
  
  constructor(private httpClient: HttpClient) {
    console.log('service constructor called');
    this.cart = [];
    this.products = [
      { id: 1, title: 'TV', price: 5 },
      { id: 2, title: 'Fridge', price: 10 },
      { id: 3, title: 'Cooker', price: 20 },
      { id: 4, title: 'Washing Machine', price: 30 },
      { id: 5, title: 'DVD Player', price: 40 },
    ];

    //this.getProducts()
                      //.subscribe(productsList => 
                        //{
                          //this.products = productsList;
                        //});

    

   }

   public getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.apiURL}/GetProductsList/`);
  }

   public getShippingCost(purchaseAmount: number):Observable<number>{
     return this.httpClient.post<number>(`${this.apiURL}/GetShippingCost/`,{ "amount": purchaseAmount });
   }

   public placeOrder(order: Product[]):Observable<boolean>{
    return this.httpClient.post<boolean>(`${this.apiURL}/PlaceOrder/`, order);
}

}
