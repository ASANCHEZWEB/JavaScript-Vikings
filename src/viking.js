// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(receiveDamage) {
    this.health -= receiveDamage;
    return undefined;
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(receiveDamage) {
    this.health -= receiveDamage;
    if (this.health < 1) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${receiveDamage} points of damage`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}
// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(receiveDamage) {
    this.health -= receiveDamage;
    if (this.health >= 1) {
      return `A Saxon has received ${receiveDamage} points of damage`;
    } else if (this.health <= 0) {
      return "A Saxon has died in combat";
    }
  }
}
// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
    return undefined;
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
    return undefined;
  }
  vikingAttack() {
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomSaxonAttack = randomSaxon.receiveDamage(randomViking.strength);
    for (let i = 0; i < this.saxonArmy.length; i++) {
        if (this.saxonArmy[i] === randomSaxon) {
            if (randomSaxon.health <= 0) {
                this.saxonArmy.splice(i, 1);
            }
        }
    }
    return randomSaxonAttack;
  }
  saxonAttack(){
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomVikingAttack = randomViking.receiveDamage(randomSaxon.strength);
    for (let i = 0; i < this.vikingArmy.length; i++) {
        if (this.vikingArmy[i] === randomViking) {
            if (randomViking.health <= 0) {
                this.vikingArmy.splice(i, 1);
            }
        }
    }
    return randomVikingAttack;
  }
}
