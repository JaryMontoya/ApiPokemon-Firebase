import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PokemonService } from '../pokemon.service';

interface Pokemon {
  name: string;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
}

@Component({
  selector: 'app-pokemon-grid',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss']
})
export class PokemonGridComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    const pokemonNames = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard',
                          'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree',
                          'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 
                          'raticate', 'sandshrew'];

    this.pokemonService.getPokemons(pokemonNames).subscribe(data => {
      this.pokemons = data;
    });
  }

  getTypeNames(pokemon: Pokemon): string {
    return pokemon.types.map(type => type.type.name).join(', ');
  }
}
