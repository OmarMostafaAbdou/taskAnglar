import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { AbouteUsComponent } from './components/aboute-us/aboute-us.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactUSComponent } from './components/contact-us/contact-us.component';
import { ApiproductComponent } from './components/apiproduct/apiproduct.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contactus', component: ContactUSComponent },
  { path: 'addProduct', component: AddproductComponent },
  { path: 'productdetails/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'Apiproduct', component: ApiproductComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
    ProductDetailsComponent,
    AddproductComponent,
    AbouteUsComponent,
    LoginComponent,

    RegisterComponent,
    ApiproductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
