import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  // bitcoinRate=null
  constructor(private http: HttpClient) { }
  getBitcoinRate() {
    const params = new HttpParams()
      .set('currency', 'USD')
      .set('value', '1');

    const rate = this.http.get(`https://blockchain.info/tobtc`, {params})
    .pipe(
      // tap(res=> this.bitcoinRate = Math.round(1 / +res) ),
      // map(res => Math.round(1 / +res).toLocaleString())
      map(res => Math.round(1 / +res))
    )
    return rate;
  }
  getMarketPrice() {
    console.log('getting what needed');
  }
  
}
