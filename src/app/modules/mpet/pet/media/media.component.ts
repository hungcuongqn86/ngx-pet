import {Component} from '@angular/core';
import {PetService} from '../../../../services/mpet/pet.service';

@Component({
    selector: 'app-mpet-pet-detail-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.css']
})

export class MediaComponent {

    constructor(public petService: PetService) {
    }
}
