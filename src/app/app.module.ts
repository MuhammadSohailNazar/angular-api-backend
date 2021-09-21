import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductsModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
