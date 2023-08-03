import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) { }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  public onDelete(id: string): void {
    this.dbzService.deleteById(id);
  }

  public onNewCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }
}
