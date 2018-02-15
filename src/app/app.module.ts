import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MessengerModule } from 'ngx-messenger';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MessengerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
