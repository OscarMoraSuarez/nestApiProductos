import { Document } from 'mongoose';
export class crearPersonaDTO extends Document{

    readonly id:string
    readonly nombre:string;
    readonly apellido: string;
    readonly edad: number;
   



}