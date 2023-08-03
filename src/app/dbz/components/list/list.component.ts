import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input('listaPersonajes')
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 100
    }
  ];

  @Output('eliminarId')
  public onDeleteById: EventEmitter<string> = new EventEmitter();

  @Output('eliminarIndex')
  public onDeleteIndex: EventEmitter<number> = new EventEmitter();

  public eliminarPorIndex(index: number): void {
    this.onDeleteIndex.emit(index);
  }

  public eliminarPorId(id: string): void {
    this.onDeleteById.emit(id);
  }
}
