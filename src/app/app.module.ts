import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GaleryComponent } from './components/galery/galery.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { BradcrumbComponent } from './components/bradcrumb/bradcrumb.component';
import { LogoCarouselComponent } from './components/logo-carousel/logo-carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    ContactFormComponent,
    GaleryComponent,
    AboutComponent,
    ProductsComponent,
    FooterComponent,
    BradcrumbComponent,
    LogoCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SlickCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
