import { Injectable } from '@angular/core';
import { Personaje, RespuestaPersonaje } from '../models/personaje.ts/personaje.ts';
@Injectable({
providedIn: 'root',
})
export class PersonajesService {
private readonly url = 'https://rickandmortyapi.com/api/character';
async obtenerPersonajes(): Promise<Personaje[]> {
const respuesta = await fetch(this.url);
const datos: RespuestaPersonaje = await respuesta.json();
return datos.results;
}
async buscarPorNombre(nombre: string): Promise<Personaje[]> {
const respuesta = await fetch(this.url + '?name=' + nombre);
if (!respuesta.ok) {
return [];
}
const datos: RespuestaPersonaje = await respuesta.json();
return datos.results;
}

}

