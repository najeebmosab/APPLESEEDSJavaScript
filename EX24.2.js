// function Pokemon(pokemonName, pokemonType,
//     pokemonAttackList) {
//     this.name = pokemonName;
//     this.type = pokemonType;
//     this.attackList = pokemonAttackList;
// }

// const fire = function () {
//     return "fire Ball";
// }

// const water = function () {
//     return "water Ball";
// }

// const electric = function () {
//     return "electric Ball";
// }

// const tail = function () {
//     return "tail attack";
// }

// const callPokemon = function () {
//     console.log(`I choose you,${this.name}`);
// }

// const attack = function (par) {
//     console.log(`the ${this.name} Pokemon use a ${this.attackList[par]()}`);
// }

// const p1 = new Pokemon("picatcho", "electric Pokemon", [electric, tail]);
// const p2 = new Pokemon("dragon", "fire Pokemon", [fire]);
// const p3 = new Pokemon("tartel", "water Pokemon", [water, tail, electric]);
// Object.assign(p1.__proto__, { callPokemon }, { attack });
// Object.assign(p2.__proto__, { callPokemon }, { attack });
// Object.assign(p3.__proto__, { callPokemon }, { attack });
// p1.callPokemon();
// p2.callPokemon();
// p3.callPokemon();


// p1.attack(0);
// p2.attack();
// p3.attack();


class Pokemon {
    constructor(name, type, attackList) {
        this.name = name;
        this.type = type;
        this.attackList = attackList;
    }

    call() {
        console.log(`I choose you, ${this.name}`);
    }

    performAttack(index) {
        console.log(`${this.name} used ${this.attackList[index]}`);
    }
}

const Dragonite = new Pokemon("Dragonite", "Dragon/Flying", ["Dragon Claw", "Wing Attack", "Dragon Dance"]);
const Alakazam = new Pokemon("Alakazam", "Psychic", ["Psychic", "Shadow Ball", "Calm Mind"]);
const Gengar = new Pokemon("Gengar", "Ghost/Poison", ["Shadow Claw", "Sludge Bomb", "Dream Eater"]);

Dragonite.call();
Dragonite.performAttack(1);

Alakazam.call();
Alakazam.performAttack(0);

Gengar.call();
Gengar.performAttack(2);