import {Owner} from './Owner';

export interface PetType {
    id: number;
    name: string;
    is_deleted: number;
}

export interface Pet {
    id: number;
    pet_type: PetType;
    owners: Owner[];
    name: string;
    gender_name: string;
    gender: number;
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
