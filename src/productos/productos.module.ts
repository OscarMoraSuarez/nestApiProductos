import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { MongooseModule } from '@nestjs/mongoose';

/* import { TypeOrmModule } from '@nestjs/typeorm'; */
import { ProductoSchema } from './schemas/producto.schema';



@Module({
    imports: [MongooseModule.forFeature([{ name: 'Productos', schema: ProductoSchema }])],
    controllers: [ProductosController],
    providers: [ProductosService]
})
export class ProductosModule { }