import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { EditCatComponent } from './manage-category/edit-cat/edit-cat.component';
import { CreateCatComponent } from './create-cat/create-cat.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { EditProductComponent } from './manage-product/edit-product/edit-product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { PdetailComponent } from './manage-product/product-detail/pdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingComponent,
    SignupComponent,
    LoginComponent,
    ManageCategoryComponent,
    EditCatComponent,
    CreateCatComponent,
    CreateProductComponent,
    ManageProductComponent,
    EditProductComponent,
    HeaderComponent,
    FooterComponent,
    LandingHeaderComponent,
    PdetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
      FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
