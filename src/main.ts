import { EnclosureId } from './classes/Enclosure';
import { createAnimal } from "./func/createAnimal";
import { Animal2 } from "./classes/Animal";
import Continent from './enums/Continent';

//* ---------------- Selecting HTMLElements ----------------

const selectAnimal = document.querySelector('#selectAnimal') as HTMLSelectElement;
const inputAnimalName = document.querySelector('#animalName') as HTMLInputElement;
const inputYearOfBirth = document.querySelector('#yearOfBirth') as HTMLInputElement;
const selectContinent = document.querySelector('#continent') as HTMLSelectElement;
const selectSpecialNeeds = document.querySelector('#specialNeeds') as HTMLSelectElement;
const selectHabitat = document.querySelector('#habitats') as HTMLSelectElement;
const createAnimalBtn = document.querySelector('#createAnimal') as HTMLButtonElement;
const savannah = document.querySelector('.savannah') as HTMLDivElement;
const jungle = document.querySelector('.jungle') as HTMLDivElement;
const reptileHouse = document.querySelector('.reptileHouse') as HTMLDivElement;
const aquarium = document.querySelector('.aquarium') as HTMLDivElement;

//! ------------------------- corrected version -------------------------

const allZooAnimals: Animal2[] = [];
const savannahAnimals: Animal2[] = [];
const jungleAnimals: Animal2[] = [];
const reptileHouseAnimals: Animal2[] = [];
const aquariumAnimals: Animal2[] = [];

createAnimalBtn?.addEventListener("click", (event: Event) => {
  // & event.preventDefault verhindert dass die Seite nicht neu geladen wird
    event.preventDefault()

    const type = selectAnimal.value
    const name = inputAnimalName.value
    const yearOfBirth = Number(inputYearOfBirth.value)
    const continent = selectContinent.value
    const specialNeeds = selectSpecialNeeds.value
    const habitat = selectHabitat.value


    const animal = createAnimal(type, name, yearOfBirth, Number(continent), specialNeeds, Number(habitat))


    console.log(animal);

    if (animal) {
        if (!type || !name || !yearOfBirth || !continent || !specialNeeds || !habitat) {
            console.error("All Fields are required");
        } else {
            allZooAnimals.push(animal)
            console.log(allZooAnimals);
        }
        function chooseHabitat() {
            if (animal?._enclosureId === EnclosureId.SavannahHabitat) {
                savannahAnimals.push(animal)
                console.log("SavannahAnimal", savannahAnimals);
            }
            if (animal?._enclosureId === EnclosureId.JungleHabitat) {
                jungleAnimals.push(animal)
                console.log("jungleAnimalArray", jungleAnimals);
            }
            if (animal?._enclosureId === EnclosureId.ReptileHouse) {
                reptileHouseAnimals.push(animal)
                console.log("ReptileAnimalArray", reptileHouseAnimals);
            }
            if (animal?._enclosureId === EnclosureId.AquaticHabitat) {
                aquariumAnimals.push(animal)
                console.log("AqueriumArray", aquariumAnimals);
            }
    }

    chooseHabitat()
    displayAnimalInclosure()
    }
})


function displayAnimalInclosure(): void {
  // ! SAVANNAH
    if (savannahAnimals && savannah) {
        savannah.innerHTML = ""
        savannahAnimals.forEach((animal: Animal2, index) => {
            const emojiDiv = document.createElement("div") as HTMLDivElement
            emojiDiv.className = "Emoji tooltip"
            const emoji = document.createElement("div") as HTMLDivElement
            emoji.textContent = animal._emoji
            const currentYear = new Date().getFullYear() // 2024
            const age = currentYear - animal._yearOfBirth

            // ! tooltip

            const tooltip = document.createElement("div") as HTMLDivElement
            tooltip.className = "savannahtooltip tooltiptext"
            tooltip.innerHTML = `
            Name: ${animal._name}
            Age: ${age}
            Origin:${Continent[animal._continents]}
            SpecialNeeds: ${animal._specialNeeds}
            `

            // !v1.
            // Origin: ${continentFunc(animal._continent)}
            // ! v2.
            // Origin:${Continent[animal._continent]}


            emojiDiv.appendChild(emoji)
            emojiDiv.appendChild(tooltip)
            savannah.appendChild(emojiDiv)

            emojiDiv?.addEventListener("dblclick", () => {
                savannahAnimals.splice(index, 1)
                displayAnimalInclosure()
                console.log("our Animal is removed", savannahAnimals);
            })
        })
    }

  // ! Jungle
    if (jungle && jungleAnimals) {
        jungle.innerHTML = "";
        jungleAnimals.forEach((animal: Animal2, index) => {
            const emojiDiv = document.createElement("div");
            emojiDiv.className = "Emoji tooltip";
            const emoji = document.createElement("div");
            emoji.innerHTML = animal._emoji;
            const currentYear = new Date().getFullYear();
            const age = currentYear - animal._yearOfBirth;
            //* Tooltipp
            const tooltip = document.createElement("div");
            tooltip.className = "jungletooltip  tooltiptext";
            tooltip.innerHTML = `
                Name: ${animal._name}<br>
                Age: ${age}<br>
                Origin: ${continentFunc(animal._continents)}<br>
                Special Needs: ${animal._specialNeeds}
                `;

            emojiDiv.appendChild(emoji);
            emojiDiv.appendChild(tooltip);

            jungle.appendChild(emojiDiv);
            //* delete by dblclick
            emojiDiv.addEventListener("dblclick", () => {
                jungleAnimals.splice(index, 1);
                displayAnimalInclosure();
                console.log("JungleHabitat after delete: ", jungleAnimals);
            });
        });
    }


  // ! Reptile
    if (reptileHouse && reptileHouseAnimals) {
        reptileHouse.innerHTML = "";
        reptileHouseAnimals.forEach((animal: Animal2, index) => {
            const emojiDiv = document.createElement("div");
            emojiDiv.className = "Emoji tooltip";
            const emoji = document.createElement("div");
            emoji.innerHTML = animal._emoji;
            const currentYear = new Date().getFullYear();
            const age = currentYear - animal._yearOfBirth;
            //* Tooltipp
            const tooltip = document.createElement("div");
            tooltip.className = "reptiletooltip  tooltiptext";
            tooltip.innerHTML = `
                Name: ${animal._name}<br>
                Age: ${age}<br>
                Origin: ${continentFunc(animal._continents)}<br>
                Special Needs: ${animal._specialNeeds}
                `;

            emojiDiv.appendChild(emoji);
            emojiDiv.appendChild(tooltip);
            reptileHouse.appendChild(emojiDiv);

            //* delete by dblclick
            emojiDiv.addEventListener("dblclick", () => {
                reptileHouseAnimals.splice(index, 1);
                displayAnimalInclosure();
                console.log("ReptileHabitat after delete: ", reptileHouseAnimals);
            });
        });
    }

  // ! Aquarium
    if (aquarium && aquariumAnimals) {
        aquarium.innerHTML = "";

        aquariumAnimals.forEach((animal: Animal2, index) => {
            const emojiDiv = document.createElement("div");
            emojiDiv.className = "Emoji tooltip";
            const emoji = document.createElement("div");
            emoji.innerHTML = animal._emoji;
            emojiDiv.appendChild(emoji);
            const currentYear = new Date().getFullYear();
            const age = currentYear - animal._yearOfBirth;
            //* Tooltipp
            const tooltip = document.createElement("div");
            tooltip.className = "aquariumtooltip tooltiptext";
            tooltip.innerHTML = `
                Name: ${animal._name}<br>
                Age: ${age}<br>
                Origin: ${continentFunc(animal._continents)}<br>
                Special Needs: ${animal._specialNeeds}
                `;

            emojiDiv.appendChild(emoji);
            emojiDiv.appendChild(tooltip);
            aquarium.appendChild(emojiDiv);

          //* delete by dblclick
            emojiDiv.addEventListener("dblclick", () => {
                aquariumAnimals.splice(index, 1);
                displayAnimalInclosure();
                console.log("AquariumHabitat after delete: ", aquariumAnimals);
            });
        });
    }
}

function continentFunc(continentEnum: number): string {
    switch (continentEnum) {
        case 0:
            return "Antarctica"
        case 1:
            return "Australia"
        case 2:
            return "Asia"
        case 3:
            return "Africa"
        case 4:
            return "Europa"
        case 5:
            return "North America"
        case 6:
            return "South America"
        default:
            return "Unknown Continent"
    }
}