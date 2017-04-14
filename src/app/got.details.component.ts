import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Houses } from "./houses";
import { HouseService } from "./house.service";

@Component ({
    selector:"house-details",
    templateUrl:"app/got-details.component.html"
})

export class GotDetailsComponent implements OnInit, OnDestroy {
    house : Houses;
    sub:any;
    constructor(private _houseService: HouseService, private _route: ActivatedRoute, private _router: Router) {
    }
    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            let id = Number.parseInt(params['id']);
            this.house = this._houseService.get(id);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    backToHouseList(){
        let link = ["/houses"];
        this._router.navigate(link);
    }
    saveHouseDetails() {
        this._houseService.save(this.house);
    }
    // @Input() house: Houses
}