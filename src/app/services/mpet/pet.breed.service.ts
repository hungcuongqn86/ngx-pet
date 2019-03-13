import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {HttpErrorHandler, HandleError} from '../../http-error-handler.service';
import {Util} from '../../helper/lib';
import {apiV1Url} from '../../const';
import {LoadingService} from '../../loading.service';

import {Router} from '@angular/router';
import {PetBreed} from '../../models/Pet';

@Injectable()
export class PetBreedService {
    static instance: PetBreedService;
    private moduleUri = 'mpet/petbreed/';
    private handleError: HandleError;
    public search = {};
    public petbreed: PetBreed;

    constructor(private router: Router, private http: HttpClient, httpErrorHandler: HttpErrorHandler,
                private loadingService: LoadingService) {
        this.handleError = httpErrorHandler.createHandleError('PetBreedService');
        if (!this.petbreed) {
            this.reset();
        }
        return PetBreedService.instance = PetBreedService.instance || this;
    }

    showLoading(value: boolean) {
        this.loadingService.setLoading(value);
    }

    reset() {
        this.petbreed = {
            id: null
            , name: ''
            , pet_type_id: 0
            , is_deleted: 0
        };
    }

    getPetBreeds(): Observable<any> {
        const url = Util.getUri(apiV1Url) + `${this.moduleUri}search`;
        let params = new HttpParams();
        Object.keys(this.search).map((key) => {
            params = params.append(key, this.search[key]);
        });
        return this.http.get<any>(url, {params: params})
            .pipe(
                catchError(this.handleError('getPetBreeds', []))
            );
    }
}
