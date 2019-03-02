import {Component} from '@angular/core';
import {PetService} from '../../../../services/mpet/pet.service';
import {PetType} from '../../../../models/Pet';

@Component({
    selector: 'app-sim-detail-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.css']
})

export class InfoComponent {
    types: PetType[];

    constructor(public petService: PetService) {
        this.getTypes();
    }

    public getTypes() {

    }
}
