import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  @Input() newCharacter: Character = {
    name: '',
    power: 0,
  };

  constructor(private dbzService:DbzService) {}

  add():void {
    if (this.newCharacter.name.trim().length === 0)
      return;

    this.dbzService.addCharacter(this.newCharacter);
    
    this.newCharacter = {
      name: '',
      power: 0,
    }
  }
}
