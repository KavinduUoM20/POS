/* tslint:disable:whitespace */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerPageComponent} from './Components/Common/customer-page/customer-page.component';
import {ItemPageComponent} from './Components/Common/item-page/item-page.component';
import {OrderDetailsPageComponent} from './Components/Common/order-details-page/order-details-page.component';
import {OrderPageComponent} from './Components/Common/order-page/order-page.component';

const routes: Routes = [
  {path: 'customer',component:CustomerPageComponent},
  {path:'item',component:ItemPageComponent},
  {path:'order',component: OrderPageComponent},
  {path:'order-details',component:OrderDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
