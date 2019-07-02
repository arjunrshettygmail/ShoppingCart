import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckOutComponent} from './check-out/check-out.component';
import {ThankYouComponent} from './thank-you/thank-you.component';
import {ProductsComponent} from './products/products.component';
import { from } from 'rxjs';

const routes: Routes = [
{path:'products/checkOut',component: CheckOutComponent},
{path:'products/checkOut/thankYou',component: ThankYouComponent},
{path:'products',component: ProductsComponent},
{path:'',redirectTo:'/products',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
