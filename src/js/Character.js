export default class Character {
  constructor(name, type, attack, defence) {
    if (name.length > 2 && name.length < 10) {
      this.name = name;
    } else {
      throw new Error('Длина имени должна быть больше 2 символов, меньше 10');
    }
    if (['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      this.type = type;
    } else {
      throw new Error(`Неверно указанный тип ${type}`);
    }
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}
