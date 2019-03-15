import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OwnerService} from '../../../services/mowner/owner.service';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-owner-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class DetailComponent implements OnInit {
    arrDiscount: string[];
    modalRef: BsModalRef;
    confirmUpdate = false;

    constructor(private router: Router, private route: ActivatedRoute
        , public ownerService: OwnerService) {
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.ownerService.owner.id = params['id'];
            }
        });
    }

    ngOnInit() {
        if (this.ownerService.owner.id !== null) {
            this.ownerService.getOwner(this.ownerService.owner.id)
                .subscribe(member => {
                    this.ownerService.owner = member.data.member;
                });
        } else {
            this.ownerService.reset();
        }
    }

    public backlist() {
        this.router.navigate(['/mowner/owner']);
    }
}
