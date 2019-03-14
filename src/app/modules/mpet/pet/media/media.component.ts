import {Component, ViewEncapsulation} from '@angular/core';
import {PetService} from '../../../../services/mpet/pet.service';
import {UploaderService} from '../../../../uploader.service';

@Component({
    selector: 'app-mpet-pet-detail-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.css'],
    providers: [UploaderService],
    encapsulation: ViewEncapsulation.None
})

export class MediaComponent {
    public images = [];

    constructor(public petService: PetService, private uploaderService: UploaderService) {
        this.images = this.petService.pet.pet_media;
    }

    public uploadExc(input: HTMLInputElement) {
        for (let i = 0; i < input.files.length; i++) {
            if (input.files[i]) {
                this.uploaderService.upload(input.files[i]).subscribe(
                    res => {
                        if (res.status) {
                            for (let j = 0; j < res.data.length; j++) {
                                this.images.push(res.data[j]);
                            }
                        }
                        input.value = null;
                    }
                );
            }
        }
    }
}
