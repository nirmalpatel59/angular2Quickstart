import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { GotComponent } from './got.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, GotComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
