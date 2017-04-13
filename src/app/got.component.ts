import { Component } from '@angular/core';
import {Houses} from './houses'
@Component({
    selector:"got-house",
    //template: `<ul><li *ngFor="let house in houses">{{house}}</li></ul>`,
    // template: `<ul><li *ngFor="let house of houses">{{house}}</li></ul>`,
    template:`<ul><li *ngFor="let house of houses">{{house.name}}</li></ul>`,
})
export class GotComponent {
    // houses: Array<string> = ['stark', 'lannister', 'baratheon', 'tully', 'bolton', 'targaryen'];
    houses: Houses[] = [
    {
        "name": 'stark',
    },
    {
        "name": 'lannister',
    },
    {
        "name": 'baratheon',
    },
    {
        "name": 'tully',
    },
    {
        "name": 'bolton',
    },
    {
        "name": 'targaryen'
    }];
}
// template: `<ul><li *ngFor="#house in houses">{{house}}</li></ul>`,
// houses: ['stark', 'lannister', 'baratheon', 'tully', 'bolton', 'targaryen'];
