import {Component, OnInit, ViewEncapsulation, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import {PetService} from '../../../services/mpet/pet.service';
import {Pet, PetType} from '../../../models/Pet';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {UploaderService} from '../../../uploader.service';

@Component({
    selector: 'app-mpet-pet',
    templateUrl: './pet.component.html',
    styleUrls: ['./pet.component.css'],
    providers: [UploaderService],
    encapsulation: ViewEncapsulation.None
})

export class PetComponent implements OnInit {
    pet: Pet;
    pets: Pet[];
    types: PetType[];
    totalItems = 0;
    modalRef: BsModalRef;
    errorMessage = [];

    constructor(private uploaderService: UploaderService, public petService: PetService,
                private router: Router, private modalService: BsModalService) {

    }

    ngOnInit() {
        this.searchPets();
    }

    pageChanged(event: any): void {
        this.petService.search.page = event.page;
        this.searchPets();
    }

    public addPet() {
        this.petService.pet.id = null;
        this.router.navigate(['/mpet/pet/add']);
    }

    public editPet(id) {
        this.router.navigate([`/mpet/pet/${id}`]);
    }

    public deletePet() {
        if (this.pet) {
            this.pet.is_deleted = 1;
            this.petService.editPet(this.pet)
                .subscribe(res => {
                    this.searchPets();
                });
        }
    }

    public searchPets() {
        this.petService.getPets()
            .subscribe(pets => {
                this.pets = pets.data.data;
                this.totalItems = pets.data.total;
            });
    }

    public getTypes() {
        const search = {page_size: 1000, page: 1};
    }

    openModal(template: TemplateRef<any>, pet) {
        this.pet = pet;
        this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    }

    confirm(): void {
        this.deletePet();
        this.modalRef.hide();
    }

    decline(): void {
        this.modalRef.hide();
    }
}
