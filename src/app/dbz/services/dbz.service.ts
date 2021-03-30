import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {
    private _characters: Character[] = [
        {
            name: 'Goku',
            power: 14500,
        },
        {
            name: 'Vegeta',
            power: 14000,
        },
    ];

    constructor() {}

    get characters():Character[] {
        return [...this._characters];
    }

    addCharacter(character:Character):void {
        this._characters.push(character);
    }
}