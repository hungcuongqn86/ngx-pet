import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CollapseModule} from 'ngx-bootstrap/collapse';

import {OwnerService} from '../../services/owner.service';
import {OwnerComponent} from './owner.component';
import {DetailComponent} from './detail.component';

import {OwnerRoutingModule} from './owner.routing.module';
import {SharedModule} from '../../shared.module';

@NgModule({
    imports: [CommonModule, FormsModule, OwnerRoutingModule, SharedModule, CollapseModule.forRoot()],
    declarations: [
        OwnerComponent,
        DetailComponent
    ],
    exports: [],
    providers: [OwnerService]
})
export class OwnerModule {
}
