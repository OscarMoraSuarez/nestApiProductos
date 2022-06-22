import *  as mongoose  from 'mongoose';

export const ProductoSchema = new mongoose.Schema({

     titulo: String,
     descripcion: String,
     categoria: String,
     proveedor: String,
     cantidad: Number



});