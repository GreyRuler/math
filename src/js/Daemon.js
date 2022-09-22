import FixMD from './FixMD';

export default class Daemon extends FixMD {
  constructor(name, type) {
    super(name, type);
    this.defence = 40;
  }
}
