import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OwnerComponent} from './owner.component';
import {DetailComponent} from './detail.component';

const routes: Routes = [
    {
        path: '', component: OwnerComponent,
        data: {
            title: 'Chủ pet'
        }
    },
    {
        path: ':id', component: DetailComponent,
        data: {
            title: 'Sửa chủ pet'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [],
    exports: [RouterModule]
})

export class OwnerRoutingModule {
    constructor() {
    }
}
