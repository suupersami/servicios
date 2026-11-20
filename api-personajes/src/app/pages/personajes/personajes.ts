import { Component, inject, signal } from '@angular/core';
import { PersonajeCard } from '../../components/personaje-card/personaje-card';
import { Personaje } from '../../models/personaje.ts/personaje.ts';
import { PersonajesService } from '../../services/personajes-service';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [PersonajeCard,FormsModule],
  selector: 'app-personajes',
  styleUrl: './personajes.css',
  templateUrl: './personajes.html',
})
export class Personajes {
  private readonly servicio = inject(PersonajesService);
  personajes = signal<Personaje[]>([]);
  cargando = signal(false);
  busqueda = '';
  constructor() {
    this.cargar();
  }
  hayError = signal(false);
  async cargar() {
    this.cargando.set(true);
    this.hayError.set(false);
    try {
      const datos = await this.servicio.obtenerPersonajes();
      this.personajes.set(datos);
    } catch {
      this.hayError.set(true);
    }
    this.cargando.set(false);
  }
  async buscar() {
    this.cargando.set(true);
    this.hayError.set(false);
    try {
      const datos = await this.servicio.buscarPorNombre(this.busqueda);
      this.personajes.set(datos);
    } catch {
      this.hayError.set(true);
    }
    this.cargando.set(false);
  }
}
