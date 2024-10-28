import Animal from "./classes/Animal";
import Enclosure from "./classes/Enclosure";
import { EnclosureId } from './classes/Enclosure';

//* ---------------- Creating the enclosures ----------------

const allEnclosures: Enclosure[] = [];
const createEnclosure = (enclosureId: EnclosureId, enclosureName: string, builtInYear: number) => {
  const enclosureInstance = new Enclosure(enclosureId, enclosureName, builtInYear);
  allEnclosures.push(enclosureInstance);
}
createEnclosure(EnclosureId.SavannahHabitat, 'Savannah Habitat', 2006);
createEnclosure(EnclosureId.JungleHabitat, 'Jungle Habitat', 2004);
createEnclosure(EnclosureId.AquaticHabitat, 'Aquarium', 2002);
createEnclosure(EnclosureId.ReptileHouse, 'Reptile House', 2003);

//* ---------------- Creating the animals ----------------

const allAnimals: Animal[] = [];
const animalCreator = (emoji: string, name: string, yearOfBirth: number, continents: string, specialNeeds: string, enclosureId: EnclosureId): Animal => {
  const animalInstance = new Animal(emoji, name, yearOfBirth, continents, specialNeeds, enclosureId);
  allAnimals.push(animalInstance);
  return animalInstance;
}
animalCreator('🦅', 'Eagle', 2000, 'America', 'Fresh meat', EnclosureId.SavannahHabitat);
animalCreator('🦁', 'Lion', 2006, 'Africa', 'Fresh meat', EnclosureId.SavannahHabitat);
animalCreator('🦆', 'Duck', 2010, 'Europe', 'Diet of small fish and crustaceans', EnclosureId.JungleHabitat);
animalCreator('🐘', 'Elephant', 2015, 'Asia', 'Large areas', EnclosureId.SavannahHabitat);
animalCreator('🐊', 'Crocodile', 1998, 'Oceania', 'Warm and humid environments', EnclosureId.JungleHabitat);
animalCreator('🐢', 'Turtle', 1980, 'South America', '', EnclosureId.JungleHabitat);
animalCreator('🐸', 'Frog', 2020, 'North America', 'Warm and humid environments', EnclosureId.JungleHabitat);
animalCreator('🦑', 'Squid', 2009, 'Europe', 'Diet of small fish and crustaceans', EnclosureId.AquaticHabitat);
animalCreator('🐙', 'Octopus', 2010, 'Oceania', 'Diet of small fish and crustaceans', EnclosureId.AquaticHabitat);
animalCreator('🐅', 'Tiger', 2016, 'Asia', 'Fresh meat', EnclosureId.JungleHabitat);
animalCreator('🦢', 'Swan', 2015, 'Europe', '', EnclosureId.JungleHabitat);
animalCreator('🐫', 'Camel', 2013, 'Africa', 'Large areas', EnclosureId.SavannahHabitat);
animalCreator('🐍', 'Snake', 2020, 'South America', 'Warm and humid environments', EnclosureId.JungleHabitat);
animalCreator('🐒', 'Monkey', 2010, 'Africa', '', EnclosureId.JungleHabitat);
animalCreator('🐬', 'Dolphin', 2018, 'South America', 'Spacious tanks for swimming', EnclosureId.AquaticHabitat);
animalCreator('🦈', 'Shark', 2019, 'North America', 'Spacious tanks for swimming', EnclosureId.AquaticHabitat);
animalCreator('🐟', 'Trout', 2020, 'Europe', 'Spacious tanks for swimming', EnclosureId.AquaticHabitat);
animalCreator('🐡', 'Pufferfish', 2021, 'Europe', 'Spacious tanks for swimming', EnclosureId.AquaticHabitat);

//* ---------------- Selecting HTMLElements ----------------

const selectAnimal = document.querySelector('#selectAnimal') as HTMLSelectElement;
const inputAnimalName = document.querySelector('#animalName') as HTMLInputElement;
const inputYearOfBirth = document.querySelector('#yearOfBirth') as HTMLInputElement;
const continent = document.querySelector('#continent') as HTMLSelectElement;
const specialNeeds = document.querySelector('#specialNeeds') as HTMLSelectElement;
const habitats = document.querySelector('#habitats') as HTMLSelectElement;
const createAnimalBtn = document.querySelector('#createAnimal') as HTMLButtonElement;
const savannah = document.querySelector('.savannah') as HTMLDivElement;
const jungle = document.querySelector('.jungle') as HTMLDivElement;
const reptileHouse = document.querySelector('.reptileHouse') as HTMLDivElement;
const aquarium = document.querySelector('.aquarium') as HTMLDivElement;

//* ---------------- Activating the creatAanimalBtn ----------------

createAnimalBtn.addEventListener('click', () => {
  allAnimals.forEach((animal) => {
    if(animal._name === selectAnimal.value) {
      animalCreator(animal._emoji, inputAnimalName.value, Number(inputYearOfBirth.value), continent.value, specialNeeds.value, Number(habitats.value));
    }
  })

  const emoji = document.createElement('span');
  
  switch(true) {
    case (habitats.value === '0'):
      emoji.textContent = allAnimals[allAnimals.length - 1]._emoji;
      savannah.appendChild(emoji)
      break;
    case (habitats.value === '1'):
      emoji.textContent = allAnimals[allAnimals.length - 1]._emoji;
      jungle.appendChild(emoji);
      break;
    case (habitats.value === '2'):
      emoji.textContent = allAnimals[allAnimals.length - 1]._emoji;
      reptileHouse.appendChild(emoji);
      break;
    case (habitats.value === '3'):
      emoji.textContent = allAnimals[allAnimals.length - 1]._emoji;
      aquarium.appendChild(emoji);
      break;
  }
})
