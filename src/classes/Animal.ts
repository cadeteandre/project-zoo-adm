import { EnclosureId } from "./Enclosure";
import Continent from "../enums/Continent";

class Animal {
    _emoji: string;
    _name: string;
    _yearOfBirth: number;
    _continents: string;
    _specialNeeds: string;
    _enclosureId: EnclosureId;

    constructor(emoji: string, name: string, yearOfBirth: number, continents: string, specialNeeds: string, enclosureId: EnclosureId) {
        this._emoji = emoji;
        this._name = name;
        this._yearOfBirth = yearOfBirth;
        this._continents = continents;
        this._specialNeeds = specialNeeds;
        this._enclosureId = enclosureId;
    }

}

export default Animal;

//! ------------------------- Farid version -------------------------

export class Animal2 {
    _emoji: string;
    _type: string;
    _name: string;
    _yearOfBirth: number;
    _continents: Continent;
    _specialNeeds: string;
    _enclosureId: EnclosureId;

    constructor(emoji: string, type: string, name: string, yearOfBirth: number, continents: Continent, specialNeeds: string, enclosureId: EnclosureId) {
        this._emoji = emoji;
        this._type = type;
        this._name = name;
        this._yearOfBirth = yearOfBirth;
        this._continents = continents;
        this._specialNeeds = specialNeeds;
        this._enclosureId = enclosureId;
    }

}
