import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OwnerComponent} from './owner/owner.component';
import {DetailComponent} from './owner/detail.component';

const routes: Routes = [
    {
        path: 'owner', component: OwnerComponent,
        data: {
            title: 'Chủ pet'
        }
    },
    {
        path: 'owner/add', component: DetailComponent,
        data: {
            title: 'Thêm chủ pet'
        }
    },
    {
        path: 'owner/edit/:id', component: DetailComponent,
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

export class MownerRoutingModule {
    constructor() {
    }
}
