import {Component, OnInit, ViewEncapsulation, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import {PetTypeService} from '../../../services/mpet/pet.type.service';
import {PetType} from '../../../models/Pet';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-mpet-pettype',
    templateUrl: './pet.type.component.html',
    styleUrls: ['./pet.type.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class PetTypeComponent implements OnInit {
    pettype: PetType;
    pettypes: PetType[];
    totalItems = 0;
    modalRef: BsModalRef;

    constructor(public petTypeService: PetTypeService,
                private router: Router, private modalService: BsModalService) {

    }

    ngOnInit() {
        this.searchPetType();
    }

    public addBase() {
        this.petTypeService.pettype.id = null;
        this.router.navigate(['/mpet/pettype/add']);
    }

    public editBase(id) {
        this.router.navigate([`/mpet/pettype/${id}`]);
    }

    public deleteBase() {
        if (this.pettype) {
            this.pettype.is_deleted = 1;
            this.petTypeService.editPetType(this.pettype)
                .subscribe(res => {
                    this.searchPetType();
                });
        }
    }

    public searchPetType() {
        this.petTypeService.getPetTypes()
            .subscribe(pettypes => {
                this.pettypes = pettypes.data.data;
                this.totalItems = pettypes.data.total;
            });
    }

    openModal(template: TemplateRef<any>, pettype) {
        this.pettype = pettype;
        this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    }

    confirm(): void {
        this.deleteBase();
        this.modalRef.hide();
    }

    decline(): void {
        this.modalRef.hide();
    }
}
