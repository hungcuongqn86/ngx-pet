import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PetComponent} from './pet/pet.component';
import {PetDetailComponent} from './pet/pet.detail.component';
import {PetTypeComponent} from './type/pet.type.component';
import {PetTypeDetailComponent} from './type/pet.type.detail.component';

const routes: Routes = [
    {
        path: 'pet', component: PetComponent,
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
    },
    {
        path: 'pettype', component: PetTypeComponent,
        data: {
            title: 'Pet'
        }
    },
    {
        path: 'pettype/add', component: PetTypeDetailComponent,
        data: {
            title: 'Thêm mới Pet'
        }
    },
    {
        path: 'pettype/edit/:id', component: PetTypeDetailComponent,
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
