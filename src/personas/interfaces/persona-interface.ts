import { Document } from 'mongoose';

export interface PersonaI extends Document{

    id:string
    nombre:string,
    apellido:string,
    edad:number
    
}