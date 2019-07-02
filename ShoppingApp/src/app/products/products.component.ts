import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';
import { ToastrService } from 'ngx-toastr';
import { ProductCheckoutService } from '../product-checkout.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]
  
  constructor(private productService:ProductCheckoutService,private toastrService:ToastrService) { 
    
  }

  ngOnInit() {
    console.log('ProductsComponent ngOnInit');
    this.products = this.productService.products;
    console.log(this.productService);
   

  }

  AddToCart(product:Product) {

    this.productService.cart.push(JSON.parse(JSON.stringify(product)));
    this.toastrService.success('Added Item to cart');
  }

}
