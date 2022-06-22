import { Module } from '@nestjs/common';
import { PersonasController } from './personas.controller';
import { PersonasService } from './personas.service';
import { MongooseModule } from '@nestjs/mongoose';

/* import { TypeOrmModule } from '@nestjs/typeorm'; */
import { PersonaSchema } from './schemas/persona.schema';



@Module({
    imports: [MongooseModule.forFeature([{ name: 'Personas', schema: PersonaSchema }])],
    controllers: [PersonasController],
    providers: [PersonasService]
})
export class PersonasModule { }
