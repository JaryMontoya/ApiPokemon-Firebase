import { Component, OnInit } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PokemonService } from '../pokemon.service';
import { HttpClientModule } from '@angular/common/http';


interface Pokemon {
id: any;
  name: string;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
}

@Component({
  selector: 'app-pokemon-grid',
  standalone: true,
  imports: [CommonModule, MatCardModule, HttpClientModule, TitleCasePipe],
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.css']
})
export class PokemonGridComponent implements OnInit {
showPokemonDetails(_t4: Pokemon) {
throw new Error('Method not implemented.');
}
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
