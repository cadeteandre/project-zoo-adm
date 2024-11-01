import Continent from "../enums/Continent";
import { Animal2 } from "./Animal";
import { EnclosureId } from "./Enclosure";

export class Lion extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        // ! Anstatt so zu schreiben, werden wir das keyword super() an dieser Stelle benutzen
        // this.name = name
        super(
            "🦁",
            "Lion",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        )
    }
}

export class Elephant extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🐘",
            "Elephant",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        )
    }
}

export class Bear extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🐻",
            "Bear",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Monkey extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🐒",
            "Monkey",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Dolphin extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🐬",
            "Dolphin",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}
export class Tiger extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🐅",
            "Tiger",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Rhinoceros extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🦏",
            "Rhinoceros",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Panda extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🐻",
            "Panda",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Camel extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🐫",
            "Camel",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

// Reptiles
export class Snake extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🐍",
            "Snake",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Turtle extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🐢",
            "Turtle",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Crocodile extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🐊",
            "Crocodile",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Lizard extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🦎",
            "Lizard",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Alligator extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🐊",
            "Alligator",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

// Birds
export class Parrot extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🐦",
            "Parrot",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Eagle extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🦅",
            "Eagle",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Macaw extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🦜",
            "Macaw",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Swan extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🦢",
            "Swan",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Duck extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🦆",
            "Duck",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Cockatoo extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🦜",
            "Cockatoo",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Toucan extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🐦",
            "Toucan",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Flamingo extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🦢",
            "Flamingo",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

// Fish
export class Fish extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🐠",
            "Fish",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Trout extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🐟",
            "Trout",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Shark extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🦈",
            "Shark",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Clownfish extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🤡",
            "Clownfish",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Pufferfish extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🐡",
            "Pufferfish",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

// Mollusks
export class Octopus extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🐙",
            "Octopus",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

export class Squid extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🦑",
            "Squid",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}

// Amphibians
export class Frog extends Animal2 {
    constructor(
        name: string,
        yearOfBirth: number,
        continent: Continent,
        specialNeeds: string,
        enclosureId: EnclosureId
    ) {
        super(
            "🐸",
            "Frog",
            name,
            yearOfBirth,
            continent,
            specialNeeds,
            enclosureId
        );
    }
}