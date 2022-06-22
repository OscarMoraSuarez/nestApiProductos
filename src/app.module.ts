import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ProductosModule } from './productos/productos.module';
import { PersonasModule } from './personas/personas.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/crudProductos'), ProductosModule, PersonasModule
    
    

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
