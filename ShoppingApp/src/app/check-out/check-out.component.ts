import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProductCheckoutService } from '../product-checkout.service';
import { Product } from '../Model/product';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor(private productService:ProductCheckoutService,private toastrService:ToastrService, private router:Router){

  }

  ngOnInit() {
    if(this.productService.cart.length > 0)
      {
        this.CalculateAmounts();
      }
    }

  CalculateAmounts() {
    this.productService.amount = this.productService.cart.reduce((sum, item) => sum + item.price, 0);
    this.productService.getShippingCost(this.productService.amount)
                      .subscribe(amount => 
                        {
                             this.productService.shippingAmount = amount;
                             this.productService.totalAmount = this.productService.amount + this.productService.shippingAmount;
                        });
    }

  RemoveFromCart(index:number) {
    this.productService.cart.splice(index, 1);
    this.toastrService.success('Item removed from cart');
    this.CalculateAmounts();
  }

  CheckOut(){
    
    this.productService.placeOrder(this.productService.cart)
                       .subscribe(amount => 
                        {
                             this.toastrService.success('Order Placed successfully!');
                             
                             setTimeout(()=>{  this.router.navigateByUrl('/products/checkOut/thankYou');
                                            }, 2000);
                             
                        });

    
  }

}
