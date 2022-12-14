import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { GaleryComponent } from './components/galery/galery.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
 {path:'',pathMatch:'full',redirectTo:'/home'},
 {path:'home',component:MainComponent},
 {path:'contact',component:ContactFormComponent},
 {path:'galery',component:GaleryComponent},
 {path:'about',component:AboutComponent},
 {path:'products',component:ProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
