const human = {
    name:"Nico",
    lastName:"las",
    nationality:"wish i was Korean",
    favfood: {
        breakfast:"Sang",
        lunch:"Donkas",
        dinner:"San + Donkas"
    }
}

// const name = human.name;
// const lastName = human.lastName;
const {name, lastName} = human;

// const difName = human.nationality;
const {name, lastName,nationality:difName} = human;

const dinner = human.favfood.dinner;

console.log(name,lastName);