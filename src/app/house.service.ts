import { Injectable } from '@angular/core';
import { Houses } from './houses';
// import { someOtherService } from './other.service'

const HOUSES : Houses[]= [
  {
    "id": 1,
    "name": 'Stark',
    "member": "Arya Stark",
    "weapon_type": "The Needle"
  },
  {
    "id": 2,
    "name": 'Lannister',
    "member": "Tyrion Lannister",
    "weapon_type":"The Little Axe",
  },
  {
    "id": 3,
    "name": 'Baratheon',
    "member": "Renly Baratheon",
    "weapon_type":"The Fire",
  },
  {
    "id": 4,
    "name": 'Tully',
    "member": "Cathlin Tully",
    "weapon_type":"The Reveng Knife",
  },
  {
    "id": 5,
    "name": 'Bolton',
    "member": "Rose Bolton",
    "weapon_type":"The Beast Hound",
  },
  {
    "id": 6,
    "name": 'Targaryen',
    "member": "Denerys Targaryen",
    "weapon_type":"Dracareys",
  },
  {
    "id": 7,
    "name": 'Tyrell',
    "member": "Martha Tyrell",
    "weapon_type":"The Hunter Sword"
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