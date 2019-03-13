import {Owner} from './Owner';

export interface PetType {
    id: number;
    name: string;
    is_deleted: number;
}

export interface PetBreed {
    id: number;
    pet_type_id: number;
    name: string;
    is_deleted: number;
}

export interface Gender {
    id: number;
    name: string;
}

export interface Pet {
    id: number;
    pet_type_id: number;
    pet_type: PetType;
    owners: Owner[];
    name: string;
    pet_breed_id: number;
    pet_breed: PetBreed;
    gender_name: string;
    gender: number;
    colour: string;
    microchip: string;
    special_markings: string;
    birth_day: string;
    dead_day: string;
    age: number;
    story: string;
    diary: string;
    guest_book: string;
    status: number;
    is_deleted: number;
    created_at: string;
    updated_at: string;
}
