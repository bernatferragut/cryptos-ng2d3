import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule,
        MdCardModule,
        MdMenuModule,
        MdToolbarModule,
        MdIconModule,
        MdInputModule } from '@angular/material';
import 'hammerjs';
import { router } from './app.routes';
import { MomentModule } from 'angular2-moment';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EthComponent } from './eth/eth.component';
import { BtcComponent } from './btc/btc.component';
import { TimeApiService } from './services/time-api.service';
import { CryptoApiService } from './services/crypto-api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EthComponent,
    BtcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    RouterModule.forRoot(router, {useHash: true}),
    MomentModule,
    FlexLayoutModule
  ],
  providers: [TimeApiService, CryptoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
