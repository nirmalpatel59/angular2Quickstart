import { Component, Input } from "@angular/core";
import { Houses } from "./houses"

@Component ({
    selector:"house-details",
    template: `
    <section *ngIf="house">
        <span style="display:inline;">{{ house.member }} from the House</span><h2 style="display:inline;"> {{ house.name }}</h2>
    </section>
    `
})
export class GotDetailsComponent {
    @Input() house: Houses
}