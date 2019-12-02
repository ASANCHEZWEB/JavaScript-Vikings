// Soldier
//creo la clase principal que contendrá dentro del constructor todas las propiedades que tiene un soldado por defecto.
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
    //este método es el que devolverá la fuerza
  }
  receiveDamage(receiveDamage) {
    this.health -= receiveDamage;
    return undefined;
    //este metodo es el que recibira por parametro el daño recibido que se le restará a la salud (linea 13) y no devuelve nada .
  }
}
// Viking
//class viking basicamente lo que hace es heredar las propiedades de soldier usando extends (linea 20)
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    //en este caso creo una nueva propiedad llamada name y ademas heredo las propiedades de soldier con super()(linea 22).
  }
  receiveDamage(receiveDamage) {
    //este metodo a pesar de poder heredarlo de soldier , lo vuelvo a crear aqui porque quiero hacer una funcionalidad distinta de la que hay en soldier
    this.health -= receiveDamage;
    if (this.health < 1) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${receiveDamage} points of damage`;
    }
    //en este caso quiero comprobar si la salud del vikingo es inferior a 1 (linea 29) y si lo es ,muestro que esta muerto y sino muestro el daño recibido.
  }
  battleCry() {
    return "Odin Owns You All!";
    //esto simplemente es un grito de guerra
  }
}
// Saxon
// esta class tambien hereda las propiedades de soldier (linea 43-45)
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
      //esta funcion tambien comprueba si el saxon tiene salud o no y devuelve algo en consecuencia .
    }
  }
}
// War
//war class no hereda nada , aqui meteré las acciones que habrá en a guerra (crear un equipo de vikingos y sajones ,
// meter vikin y sajones a sus equipos, crear ataques y mostrar el estado de la guerra)
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    //aqui creo las propiedades que guardaran a los luchadores , cada uno en su equipo
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
    return undefined;
    //este metodo pusheara un nuevo vikingo en el array (linea 62) recibido por parametro como un objeto (con las propiedades de la linea 21)
    // y no tiene que devolver nada.
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
    return undefined;
    //este metodo pusheara un sajon en el array de la (linea 63) con las propiedades de (linea 44-45)
  }
  vikingAttack() {
    //este metodo atacará a los sajones
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    //elijo un vikingo aleatorio que sera el que atacará (linea 80)
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    //elijo un sajon aleatorio que sera el que recibirá el daño(linea 82)
    let randomSaxonAttack = randomSaxon.receiveDamage(randomViking.strength);
    //guardo en la variable randomSaxonAttack lo que devuelve la función receiveDamage, que es si esta muerto o vivo 
    for (let i = 0; i < this.saxonArmy.length; i++) {
   //en este bucle recorro el array de la linea 63 , eliminando los que tengan la saluz <= 0, osea estan muertos.
      if (this.saxonArmy[i] === randomSaxon) {
        if (randomSaxon.health <= 0) {
          this.saxonArmy.splice(i, 1);
        }
      }
    }
    return randomSaxonAttack;
    //aqui devuelvo lo de la linea 84
  }
  saxonAttack() {
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    //aqui igual que arriba calculo un vikingo y un saxon aleatorio
    let randomVikingAttack = randomViking.receiveDamage(randomSaxon.strength);
    //randomvikingAtack lo que hace es atacar a un vikingo y restarle en salud el strength de un sajon 
    for (let i = 0; i < this.vikingArmy.length; i++) {
        //aqui recorro el array de la linea 62 y elimino los que tengan salud <= 0 , porq estan muertos.
      if (this.vikingArmy[i] === randomViking) {
        if (randomViking.health <= 0) {
          this.vikingArmy.splice(i, 1);
        }
      }
    }
    return randomVikingAttack;
    //devuelvo lo de la linea 101
  }
  showStatus() {
      //este es el superbonus del ejercicio , simplemente compruebo que array(lineas 62-63) se ha quedado sin solsados antes, osea array vacio.
    if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
        //aqui simplmente compruebo que hay mas de 1 solsado en los dos equipos para informar que la guerra sigue.
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
