import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, TitleCasePipe],
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}

