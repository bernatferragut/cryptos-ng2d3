import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TimeApiService } from './../services/time-api.service';
import { CryptoApiService } from './../services/crypto-api.service';
import { Observable } from 'rxjs/Rx';
import { routerTransition } from './../animations';

@Component({
  selector: 'app-eth',
  templateUrl: './eth.component.html',
  styleUrls: ['./eth.component.css'],
  animations: [routerTransition],
  host: { '[@routerTransition]': '' }
})
export class EthComponent implements OnInit {

  currentDateTime: any;
  etherPrice: any;

  constructor(  private _timeApiService: TimeApiService,
                private _cryptoService: CryptoApiService ) { }

  ngOnInit() {
    this.getUpdate();
   }

   getUpdate() {
    this.etherPrice = this._cryptoService.getEtherGeneralInfo()
      .subscribe((res) => this.etherPrice = res);
 
    this.currentDateTime = this._timeApiService.getDateTime()
      .subscribe( res => this.currentDateTime = res);
     }
}

