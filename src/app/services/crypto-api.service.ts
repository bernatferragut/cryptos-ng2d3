import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CryptoApiService {

  constructor( private _http: Http ) { }

   // 1.Simple way of creating a http observable

  getBitcoinPrice() {
    return this._http.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC,USD,EUR')
    .map( (res: Response) => res.json() );
  }

    // 2.Creating a http observable every x interval of time
  getBitcoinGeneralInfo = () => {
    return Observable
      .interval(30 * 1000)
      .startWith(0)
      .flatMap((i) => this._http.get('https://www.cryptocompare.com/api/data/coinsnapshot/?fsym=BTC&tsym=USD'))
      .map( (res: Response) => res.json() )
      .do(res => console.log(res));
  }
///////////////////////////////////////////////////////////////////////////////////////////////

  getEthereumPrice() {
    return this._http.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=ETH,USD,EUR')
    .map( (res: Response) => res.json() );
  }

  getEtherGeneralInfo = () => {
    return Observable
      .interval(30 * 1000)
      .startWith(0)
      .flatMap((i) => this._http.get('https://www.cryptocompare.com/api/data/coinsnapshot/?fsym=ETH&tsym=USD'))
      .map( (res: Response) => res.json() )
      .do(res => console.log(res));
  }

///////////////////////////////////////////////////////////////////////////////////////////////

  getDashPrice() {
    return this._http.get('https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=DASH,USD,EUR')
    .map( (res: Response) => res.json() );
  }

  getDashGeneralInfo = () => {
    return Observable
      .interval(30 * 1000)
      .startWith(0)
      .flatMap((i) => this._http.get('https://www.cryptocompare.com/api/data/coinsnapshot/?fsym=DASH&tsym=USD'))
      .map( (res: Response) => res.json() )
      .do(res => console.log(res));
  }

}
