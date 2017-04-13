import { Houses } from './houses';
import { Injectable } from '@angular/core';
import { someOtherService } from './other.service'
@Injectable()
export class HouseService{
    constructor(private _someOtherService:someOtherService){}
    getAllGOTHouses() : Houses[] {
        return [
            { "name": 'Stark',
              "member":"Arya Stark"
            },
            { "name": 'Lannister',
              "member":"Tyrion Lannister",
            },
            { "name": 'Baratheon',
              "member":"Renly Baratheon",
            },
            { "name": 'Tully',
              "member":"Cathlin Tully",
            },
            { "name": 'Bolton',
              "member":"Rose Bolton",
            },
            { "name": 'Targaryen',
              "member":"Denerys Targaryen",
            },
            { "name": 'Tyrell',
              "member": "Martha Tyrell"
            }
        ]
    } 
}