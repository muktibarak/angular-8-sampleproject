import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursesModule } from './courses/courses.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http'
import { EmployeeserviceService } from './auth/employeeservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoursesModule,
    StaticpagesModule,
    AdminModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
