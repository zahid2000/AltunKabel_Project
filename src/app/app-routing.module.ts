import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { GaleryComponent } from './components/galery/galery.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
 {path:'',pathMatch:'full',redirectTo:'/home'},
 {path:'home',component:MainComponent},
 {path:'contact',component:ContactFormComponent},
 {path:'galery',component:GaleryComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
