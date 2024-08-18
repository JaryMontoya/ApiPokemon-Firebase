import { Component, NgModule } from '@angular/core';
import { PokemonGridComponent } from './pokemon-grid/pokemon-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [PokemonGridComponent, HttpClientModule],
  providers: [PokemonService]
})

export class AppComponent {
  title = 'pokemon-grid';
}
