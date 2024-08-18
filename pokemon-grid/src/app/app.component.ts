import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonService } from './pokemon.service';
import { PokemonDialogComponent } from './pokemon-dialog/pokemon-dialog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, FooterComponent, PokemonDialogComponent, TitleCasePipe ]
})
export class AppComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService, private dialog: MatDialog) { }

  ngOnInit(): void {
    const ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const idsAsString: string[] = ids.map(id => id.toString());

    this.pokemonService.getPokemons(idsAsString).subscribe(data => {
      this.pokemons = data;
    });
  }

  openDialog(pokemon: any): void {
    this.dialog.open(PokemonDialogComponent, {
      data: pokemon
    });
  }
}
