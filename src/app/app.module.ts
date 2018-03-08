import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SameAccountTransferComponent } from './Transfer/same-account-transfer/same-account-transfer.component';
import { SameAccountRemovalComponent } from './Removal/same-account-removal/same-account-removal.component';
import { NotFoundComponent } from './app.notFoundComponent';
import {Routing} from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    SameAccountTransferComponent,
    SameAccountRemovalComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
