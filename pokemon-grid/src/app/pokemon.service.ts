import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  // Obtiene información de un Pokémon por su nombre
  getPokemonData(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${name}`);
  }

  // Obtiene información de varios Pokémon en paralelo
  getPokemons(names: string[]): Observable<any[]> {
    const requests = names.map(name => this.getPokemonData(name));
    return forkJoin(requests);
  }
}

