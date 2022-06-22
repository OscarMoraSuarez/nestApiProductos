import { Injectable } from '@nestjs/common';
import { ProductoI } from './interfaces/producto-interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ProductosService {

    constructor(@InjectModel('Productos') private readonly productoModel:Model<ProductoI>){}

    async buscarTodos():Promise<ProductoI[]>{
        console.log('entroa servicio')
        return  await this.productoModel.find();

    }
   async buscarProducto(id:string):Promise<ProductoI>{


        return await this.productoModel.findOne({_id: id });

    }
    async crearProducto(producto:ProductoI):Promise<ProductoI>{

        const nuevoProducto = new this.productoModel(producto)
        return await nuevoProducto.save();

    }
    async modificarProducto(id:string,producto:ProductoI): Promise<ProductoI>{


        return await this.productoModel.findByIdAndUpdate(id,producto,{new:true});


    }
    async eliminarProducto(id:string):Promise<ProductoI> {


        return await this.productoModel.findByIdAndRemove(id);


    }




}
