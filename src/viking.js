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
class War {}
