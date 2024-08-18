import { Component } from '@angular/core';
import { PokemonGridComponent } from './pokemon-grid/pokemon-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PokemonGridComponent] // Importa PokemonGridComponent aquí
})
export class AppComponent {
  title = 'pokemon-grid';
}
