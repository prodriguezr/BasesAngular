import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = [
    'Spiderman', 
    'Ironman', 
    'Hulk', 
    'Black Widow', 
    'Thor', 
    'Black Phanter'];
  removedHero: string = '';

  removeHero():void {
    this.removedHero = this.heroes.shift() || '';
  }
}
