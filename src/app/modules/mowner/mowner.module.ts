import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CollapseModule} from 'ngx-bootstrap/collapse';

import {OwnerService} from '../../services/mowner/owner.service';
import {OwnerComponent} from './owner/owner.component';
import {DetailComponent} from './owner/detail.component';

import {MownerRoutingModule} from './mowner.routing.module';
import {SharedModule} from '../../shared.module';

@NgModule({
    imports: [CommonModule, FormsModule, MownerRoutingModule, SharedModule, CollapseModule.forRoot()],
    declarations: [
        OwnerComponent,
        DetailComponent
    ],
    exports: [],
    providers: [OwnerService]
})
export class MownerModule {
}
