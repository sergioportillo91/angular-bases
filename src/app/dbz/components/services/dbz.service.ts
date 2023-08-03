import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Gokú',
      power: 1500
    },
    {
      id: uuid(),
      name: 'vegeta',
      power: 1200
    },
    {
      id: uuid(),
      name: 'Cel',
      power: 2000
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 7800
    }
  ];

  public onNewCharacter(character: Character): void {

    const nuevo: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }

    this.characters.push(nuevo);
  }

  public deleteByIndex(index: number): void {
    this.characters.splice(index, 1);
  }

  public deleteById(id: string): void {
    this.characters = this.characters.filter(item => item.id != id);
  }

}
