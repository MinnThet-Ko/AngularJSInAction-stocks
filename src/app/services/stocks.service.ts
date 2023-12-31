import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let stocks: Array<String> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR']
let service: string = 'https://angular2-in-action-api.herokuapp.com';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercentage: number;
}
@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  get() {
    return stocks.slice();
  }

  add(stock: any) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock: any) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols: any) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }
}
