import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PetService} from '../../../services/mpet/pet.service';

@Component({
    selector: 'app-mpet-pet-detail',
    templateUrl: './pet.detail.component.html',
    styleUrls: ['./pet.detail.component.css']
})

export class PetDetailComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute
        , public petService: PetService) {
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.petService.pet.id = params['id'];
            }
        });
    }

    ngOnInit() {
        if (this.petService.pet.id !== null) {
            this.petService.getPet(this.petService.pet.id)
                .subscribe(pet => {
                    this.petService.pet = pet.data.pet;
                });
        } else {
            this.petService.reset();
        }
    }

    public backlist() {
        this.router.navigate(['/mpet/pet']);
    }
}
