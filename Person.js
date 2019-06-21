class Person {
    constructor(name){
        this.health = 100;
        this.weapon = null;
        this.name = name
    }
    equip(weapon) {
        this.weapon = weapon;
    }
    attack(person) {
        person.health = person.health - this.weapon.damage;
    }
}