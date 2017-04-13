import { Component, OnInit } from '@angular/core';
import { Houses } from './houses';
import { HouseService } from "./house.service";
@Component({
    selector:"got-house",
    //template: `<ul><li *ngFor="let house in houses">{{house}}</li></ul>`,
    // template: `<ul><li *ngFor="let house of houses">{{house}}</li></ul>`,
    template:`<ul><li *ngFor="let house of houses">{{house.name}}</li></ul>`,
})
export class GotComponent {
    // houses: Array<string> = ['stark', 'lannister', 'baratheon', 'tully', 'bolton', 'targaryen'];
    houses: Houses[] = [];
    constructor(private _houseService:HouseService) {}
    ngOnInit() {
        this.houses = this._houseService.getAllGOTHouses();
    }
}
// template: `<ul><li *ngFor="#house in houses">{{house}}</li></ul>`,
// houses: ['stark', 'lannister', 'baratheon', 'tully', 'bolton', 'targaryen'];
