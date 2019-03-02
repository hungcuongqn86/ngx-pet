import {Component, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PetTypeService} from '../../../services/mpet/pet.type.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-base-detail',
    templateUrl: './pet.type.detail.component.html',
    styleUrls: ['./pet.type.detail.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class PetTypeDetailComponent implements OnInit {
    arrDiscount: string[];
    modalRef: BsModalRef;
    confirmUpdate = false;

    constructor(private router: Router, private route: ActivatedRoute, private modalService: BsModalService
        , public pettypeService: PetTypeService) {
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.pettypeService.pettype.id = params['id'];
            }
        });
    }

    ngOnInit() {
        if (this.pettypeService.pettype.id !== null) {
            this.pettypeService.getPetType(this.pettypeService.pettype.id)
                .subscribe(pettype => {
                    this.pettypeService.pettype = pettype.data.pettype;
                });
        } else {
            this.pettypeService.reset();
        }
    }

    public updateAgency(template: TemplateRef<any>) {
        if (this.confirmUpdate) {
            this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
        } else {
            this.pettypeService.updatePetType();
        }
    }

    public backlist() {
        this.router.navigate(['/mpet/pettype/list']);
    }
}
