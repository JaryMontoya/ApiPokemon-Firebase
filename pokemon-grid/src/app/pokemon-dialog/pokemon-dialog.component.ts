import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-dialog',
  templateUrl: './pokemon-dialog.component.html',
  styleUrls: ['./pokemon-dialog.component.css']
})
export class PokemonDialogComponent {
  types: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.types = this.formatTypes(data.types);
  }

  formatTypes(types: any[]): string {
    return types.map(typeInfo => typeInfo.type.name).join(', ');
  }
}
