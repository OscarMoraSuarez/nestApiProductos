import { Document } from 'mongoose';

export interface ProductoI extends Document{

    id:string
    titulo:string,
    descripcion:string,
    categoria:string,
    proveedor:string,
    cantidad:number
}