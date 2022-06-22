import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { crearPersonaDTO } from './DTO/crear-persona';
import { PersonasService } from './personas.service';
import { PersonaI } from './interfaces/persona-interface';

@Controller('personas')
export class PersonasController {

    constructor(private readonly personaService: PersonasService) { }

    @Get()
    getAllPersonas(): Promise<PersonaI[]> {
        console.log('entro al controlafor')
        return this.personaService.buscarTodos();

    }
    @Get(':id')
    buscarUno(@Param('id') idPersona: string): Promise<PersonaI> {

        return this.personaService.buscarPersona(idPersona);

    }

    @Post()
    crearProducto(@Body() personaDTO: crearPersonaDTO): Promise<PersonaI> {

        return this.personaService.crearPersona(personaDTO);

    }

    @Put(':id')
    modificarProducto(@Param('id') idPersona: string, @Body() personaDTO: crearPersonaDTO): Promise<PersonaI> {

        return this.personaService.modificarPersona(idPersona, personaDTO);

    }

    @Delete(':id')
    borrarProducto(@Param('id') idPersona: string): Promise<PersonaI> {

        return this.personaService.eliminarPersona(idPersona);

    }






}
