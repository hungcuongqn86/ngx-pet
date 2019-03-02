import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PetComponent} from './pet/pet.component';
import {PetDetailComponent} from './pet/pet.detail.component';

const routes: Routes = [
    {
        path: 'pet/list', component: PetComponent,
        data: {
            title: 'Pet'
        }
    },
    {
        path: 'pet/add', component: PetDetailComponent,
        data: {
            title: 'Thêm mới Pet'
        }
    },
    {
        path: 'pet/edit/:id', component: PetDetailComponent,
        data: {
            title: 'Thêm mới Pet'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [],
    exports: [RouterModule]
})

export class MpetRoutingModule {
    constructor() {
    }
}
