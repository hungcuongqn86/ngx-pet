import {Component, OnInit, ViewEncapsulation, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import {OwnerService} from '../../services/owner.service';
import {Owner} from '../../models/Owner';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-owner',
    templateUrl: './owner.component.html',
    styleUrls: ['./owner.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class OwnerComponent implements OnInit {
    owner: Owner;
    owners: Owner[];
    totalItems = 0;
    modalRef: BsModalRef;

    constructor(public ownerService: OwnerService,
                private router: Router, private modalService: BsModalService) {

    }

    ngOnInit() {
        this.searchOwners();
    }

    pageChanged(event: any): void {
        this.ownerService.search.page = event.page;
        this.searchOwners();
    }

    public editOwner(id) {
        this.router.navigate([`/owner/${id}`]);
    }

    public deleteOwner() {
        if (this.owner) {
            this.owner.is_deleted = 1;
            this.ownerService.editOwner(this.owner)
                .subscribe(res => {
                    this.searchOwners();
                });
        }
    }

    public searchOwners() {
        this.ownerService.getOwners()
            .subscribe(owners => {
                this.owners = owners.data.data;
                this.totalItems = owners.data.total;
            });
    }

    openModal(template: TemplateRef<any>, member) {
        this.owner = member;
        this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    }

    confirm(): void {
        this.deleteOwner();
        this.modalRef.hide();
    }

    decline(): void {
        this.modalRef.hide();
    }
}
