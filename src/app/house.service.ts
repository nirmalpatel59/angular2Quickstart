import { Houses } from './houses';
import { Injectable } from '@angular/core';
import { someOtherService } from './other.service'
@Injectable()
export class HouseService{
    constructor(private _someOtherService:someOtherService){}
    getAllGOTHouses() : Houses[] {
        return [
            { "name": 'Stark'},
            { "name": 'Lannister'},
            { "name": 'Baratheon'},
            { "name": 'Tully'},
            { "name": 'Bolton'},
            { "name": 'Targaryen'},
            { "name": 'Tyrell' }
        ]
    } 
}