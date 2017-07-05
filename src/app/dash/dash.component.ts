import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TimeApiService } from './../services/time-api.service';
import { CryptoApiService } from './../services/crypto-api.service';
import { Observable } from 'rxjs/Rx';
import { routerTransition } from './../animations';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
  animations: [routerTransition],
  host: {'[@routerTransition]':''}
})

export class DashComponent implements OnInit {

  currentDateTime: any;
  dashPrice: any;

  constructor(  private _timeApiService: TimeApiService,
                private _cryptoService: CryptoApiService ) { }

  ngOnInit() {
    this.getUpdate();
   }

   getUpdate() {
    this.dashPrice = this._cryptoService.getDashGeneralInfo()
      .subscribe((res) => this.dashPrice = res);

    this.currentDateTime = this._timeApiService.getDateTime()
    .subscribe( res => this.currentDateTime = res);
   }
}

