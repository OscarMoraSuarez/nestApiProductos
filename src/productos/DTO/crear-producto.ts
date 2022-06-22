import { Document } from 'mongoose';
export class crearProductoDTO extends Document{

    readonly id:string
    readonly titulo:string;
    readonly descripcion: string;
    readonly categoria: string;
    readonly proveedor: string;
    readonly cantidad: number



}