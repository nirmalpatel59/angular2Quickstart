import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, RouterOutletMap } from '@angular/router';
import { routing } from './app.routes';
import { AppComponent }  from './app.component';
import { GotComponent } from './got.component';
import { GotDetailsComponent } from './got.details.component'

@NgModule({
  imports: [BrowserModule, routing ],
  declarations: [AppComponent, GotComponent, GotDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
