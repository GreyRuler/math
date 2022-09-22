import Character from './Character';

export default class FixMD extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this._attack = 10;
  }

  /**
     * @param n кол-во клеток
     */
  setAttack(n) {
    if (n <= 10) {
      n -= 1;
      this._attack = this.attack * ((n * 10) / 100);
    } else {
      this._attack = this.attack;
    }
  }

  getAttack() {
    return this._attack;
  }

  /**
     * @param n кол-во клеток
     */
  setStoned(n) {
    this._attack = this.attack - (Math.log(n) / Math.log(2)) * 5;
  }
}
