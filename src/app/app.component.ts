import { Component } from '@angular/core';
import { HouseService } from './house.service';
import { someOtherService } from './other.service'
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><router-outlet></router-outlet>`,
  providers: [HouseService, someOtherService]
})
export class AppComponent  { name = 'World'; }
