export class Character
{
  constructor(name, race, archetype, allegience, ultimate)
  {
    this.name = name;
    this.race = race;
    this.archetype = archetype; //class
    this.allegience = allegience;
    this.ultimate = ultimate;
    this.health = 100; //every character has 100 health
  }
}

export class Troll extends Character
{
  constructor(name, archetype, allegience, ultimate)
  {
    super(name, "Troll", archetype, allegience, ultimate);
    this.hunger = 10; //every troll has 10 hunger
    this.rage = 10; //every troll has 10 rage
  }

  setHunger()
  {
    setInterval(() => {
      this.hunger--;
      console.log(this.hunger);
    }, 5000);
  }

  setRage()
  {
    setInterval(() => {
      this.rage--;
    }, 5000);
  }

  getEnraged()
  {
    if(this.rage === 10 || this.hunger === 10)
    {
      console.log("RAARR!");
      this.health+=5;
      console.log(this.health);
    }
  }
}
let Bayne = new Troll("Bayne", "Warlock", "Horde", "Reigning_Thunder");

export class Elf extends Character
{
  constructor(name, archetype, allegience, ultimate)
  {
    super(name, "Elf", archetype, allegience, ultimate);
    this.wisdom = 10;
    this.pacisifism = 10;
  }
}

export class 

let Leaf = new Elf("Stag", "Archer", "Alliance", "Void_Bow")
