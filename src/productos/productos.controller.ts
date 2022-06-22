import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { crearProductoDTO } from './DTO/crear-producto';
import { ProductosService } from './productos.service';
import { ProductoI } from './interfaces/producto-interface';

@Controller('productos')
export class ProductosController {

    constructor(private readonly productoService:ProductosService){}

    @Get()
    getAllProductos(): Promise<ProductoI[]>{
        console.log('entro al controlafor')
        return this.productoService.buscarTodos();

    }
    @Get(':id')
    buscarUno(@Param('id') idProducto:string): Promise<ProductoI>{

        return this.productoService.buscarProducto(idProducto);

    }

    @Post()
    crearProducto(@Body() productoDTO:crearProductoDTO) : Promise<ProductoI>{

        return this.productoService.crearProducto(productoDTO);

    }

    @Put(':id')
    modificarProducto(@Param('id') idProducto:string, @Body() productoDTO:crearProductoDTO):Promise<ProductoI>{

        return this.productoService.modificarProducto(idProducto,productoDTO);

    }

    @Delete(':id')
    borrarProducto(@Param('id') idProducto:string ):Promise<ProductoI>{

        return this.productoService.eliminarProducto(idProducto);

    }






}
