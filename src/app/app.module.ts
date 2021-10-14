import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';


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
import { ReactiveFormsModule} from "@angular/forms";
import { FormsModule} from "@angular/forms";
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ProductsLandingComponent } from './landing/products-landing/products-landing.component';
import {MaterialModule} from "./material.module";

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
    PageNotFoundComponent,
    LoadingSpinnerComponent,
    ProductsLandingComponent
  ],
    imports: [
      HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
      FormsModule,
      NgbModule,
      MaterialModule,
      CarouselModule,
      BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
