import { Injectable } from '@nestjs/common';
import { PersonaI } from './interfaces/persona-interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class PersonasService {

    constructor(@InjectModel('Personas') private readonly personaModel: Model<PersonaI>) { }

    async buscarTodos(): Promise<PersonaI[]> {

        return await this.personaModel.find();

    }
    async buscarPersona(id: string): Promise<PersonaI> {


        return await this.personaModel.findOne({ _id: id });

    }
    async crearPersona(persona: PersonaI): Promise<PersonaI> {

        const nuevoPersona = new this.personaModel(persona)
        return await nuevoPersona.save();

    }
    async modificarPersona(id: string, persona: PersonaI): Promise<PersonaI> {


        return await this.personaModel.findByIdAndUpdate(id, persona, { new: true });


    }
    async eliminarPersona(id: string): Promise<PersonaI> {


        return await this.personaModel.findByIdAndRemove(id);


    }




}
