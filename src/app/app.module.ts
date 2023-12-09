import { HttpClientModule } from '@angular/common/http';
import { StocksService } from './services/stocks.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
@NgModule({
  imports:      [ BrowserModule, HttpClientModule ],
  providers:    [ StocksService ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }