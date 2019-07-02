import { Injectable, OnInit } from '@angular/core';
import { Product } from './Model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCheckoutService implements OnInit{

  public amount:number = 0;
  public shippingAmount:number = 0;
  public totalAmount:number = 0;
  public cart:Product[]
  products$;
  apiURL: string = 'http://localhost:56036/api/shoppingCart/';
  
  constructor(private httpClient: HttpClient) {
    this.cart = [];
    this.products$ = this.getProducts();
   }

   ngOnInit(){
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
