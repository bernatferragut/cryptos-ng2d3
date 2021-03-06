import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TimeApiService } from './../services/time-api.service';
import { CryptoApiService } from './../services/crypto-api.service';
import { Observable } from 'rxjs/Rx';
import { routerTransition } from './../animations';

@Component({
  selector: 'app-btc',
  templateUrl: './btc.component.html',
  styleUrls: ['./btc.component.css'],
  animations: [routerTransition],
  host: {'[@routerTransition]':''}
})

export class BtcComponent implements OnInit {

  currentDateTime: any;
  bitCoinPrice: any;

  constructor(  private _timeApiService: TimeApiService,
                private _cryptoService: CryptoApiService ) { }

  ngOnInit() {
    this.getUpdate();
   }

   getUpdate() {
    this.bitCoinPrice = this._cryptoService.getBitcoinGeneralInfo()
      .subscribe((res) => this.bitCoinPrice = res);

    this.currentDateTime = this._timeApiService.getDateTime()
      .subscribe( res => this.currentDateTime = res);
   }
}
