import { ProductInfoComponent } from './components/Cabel-Products/product-info/product-info.component';
import { HardProductsComponent } from './components/Cabel-Products/hard-products/hard-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { GaleryComponent } from './components/galery/galery.component';
import { LogoCarouselComponent } from './components/logo-carousel/logo-carousel.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsComponent } from './components/Cabel-Products/products/products.component';
import { FireProductsComponent } from './components/Cabel-Products/fire-products/fire-products.component';

const routes: Routes = [
 {path:'',pathMatch:'full',redirectTo:'/home'},
 {path:'home',component:MainComponent},
 {path:'contact',component:ContactFormComponent},
 {path:'galery',component:GaleryComponent},
 {path:'about',component:AboutComponent},
 {path:'products',component:ProductsComponent},
 {path:'logo',component:LogoCarouselComponent},
 {path:'fire',component:FireProductsComponent},
 {path:'hard',component:HardProductsComponent},
 {path:'product-info',component:ProductInfoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
