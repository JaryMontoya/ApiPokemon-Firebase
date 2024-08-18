import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

  constructor(private http: HttpClient) { }

  getPokemons(ids: string[]): Observable<any[]> {
    const requests = ids.map(id => this.http.get(`${this.apiUrl}${id}`));
    return forkJoin(requests);
  }
}

