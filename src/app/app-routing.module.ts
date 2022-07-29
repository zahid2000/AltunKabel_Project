import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
 {path:'',pathMatch:'full',redirectTo:'/home'},
 {path:'home',component:MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
