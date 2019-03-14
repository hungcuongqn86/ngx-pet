import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PetComponent} from './pet/pet.component';
import {PetDetailComponent} from './pet/pet.detail.component';
import {PetTypeComponent} from './type/pet.type.component';
import {PetTypeDetailComponent} from './type/pet.type.detail.component';
import {PetBreedComponent} from './breed/pet.breed.component';
import {PetBreedDetailComponent} from './breed/pet.breed.detail.component';

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
            title: 'Sửa Pet'
        }
    },
    {
        path: 'pettype', component: PetTypeComponent,
        data: {
            title: 'Loại thú'
        }
    },
    {
        path: 'pettype/add', component: PetTypeDetailComponent,
        data: {
            title: 'Thêm mới loại thú'
        }
    },
    {
        path: 'pettype/edit/:id', component: PetTypeDetailComponent,
        data: {
            title: 'Chỉnh sửa loại thú'
        }
    },
    {
        path: 'petbreed', component: PetBreedComponent,
        data: {
            title: 'Giống'
        }
    },
    {
        path: 'petbreed/add', component: PetBreedDetailComponent,
        data: {
            title: 'Thêm mới giống'
        }
    },
    {
        path: 'petbreed/edit/:id', component: PetBreedDetailComponent,
        data: {
            title: 'Chỉnh sửa giống'
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
