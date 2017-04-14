import { Injectable } from '@angular/core';
import { Houses } from './houses';
// import { someOtherService } from './other.service'

const HOUSES : Houses[]= [
  {
    "id": 1,
    "name": 'Stark',
    "member": "Arya Stark"
  },
  {
    "id": 2,
    "name": 'Lannister',
    "member": "Tyrion Lannister",
  },
  {
    "id": 3,
    "name": 'Baratheon',
    "member": "Renly Baratheon",
  },
  {
    "id": 4,
    "name": 'Tully',
    "member": "Cathlin Tully",
  },
  {
    "id": 5,
    "name": 'Bolton',
    "member": "Rose Bolton",
  },
  {
    "id": 6,
    "name": 'Targaryen',
    "member": "Denerys Targaryen",
  },
  {
    "id": 7,
    "name": 'Tyrell',
    "member": "Martha Tyrell"
  }
];
@Injectable()
export class HouseService{
    // constructor(private _someOtherService:someOtherService){}
    getAllGOTHouses() : Houses[] {
        return HOUSES.map(p => this.clone(p));
    } 
    get(id: number) : Houses{
      return this.clone(HOUSES.find(p => p.id === id));
    }
    save(house: Houses){
      let originaHouse = HOUSES.find(p=> p.id === house.id);
      if(originaHouse) Object.assign(originaHouse, house);
    }
    private clone(object : any) {
      return JSON.parse(JSON.stringify(object));
    }
}