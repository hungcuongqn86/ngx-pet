import {Component} from '@angular/core';
import {OwnerService} from '../../../../services/mowner/owner.service';

@Component({
    selector: 'app-mowner-owner-detail-pets',
    templateUrl: './pets.component.html',
    styleUrls: ['./pets.component.css']
})

export class PetsComponent {
    constructor(public ownerService: OwnerService) {

    }
}
