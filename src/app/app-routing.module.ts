import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CreateCatComponent} from "./create-cat/create-cat.component";
import {ManageCategoryComponent} from "./manage-category/manage-category.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {ManageProductComponent} from "./manage-product/manage-product.component";
import {EditProductComponent} from "./manage-product/edit-product/edit-product.component";
import {PdetailComponent} from "./manage-product/product-detail/pdetail.component";
import {EditCatComponent} from "./manage-category/edit-cat/edit-cat.component";

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'db', component: DashboardComponent},
  {path: 'cc', component: CreateCatComponent},
  {path: 'mc', component: ManageCategoryComponent},
  {path: 'cp', component: CreateProductComponent},
  {path: 'mp', component: ManageProductComponent},
  {path: 'mp/:id', component: PdetailComponent},
  {path: 'mc', component: ManageCategoryComponent},
  {path: 'mc/:id', component: EditCatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
