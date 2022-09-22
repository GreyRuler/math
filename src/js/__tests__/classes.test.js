import { expect, test } from '@jest/globals';
import Character from '../Character';
import Daemon from '../Daemon';
import Magician from '../Magician';
import FixMD from '../FixMD';

test('should match the specified properties', () => {
  const object = new Character('Характер', 'Bowman', 100, 100);
  expect(object.health).toBe(100);
  expect(object.level).toBe(1);
});

test('should throw an error', () => {
  const f = () => new Character('Очень длинное имя', 'Bowman');
  expect(f).toThrowError(Error);
  expect(f).toThrowError('Длина имени должна быть больше 2 символов, меньше 10');
});

test('should throw an error', () => {
  const f = () => new Character('Характер', 'Error');
  expect(f).toThrowError(Error);
  expect(f).toThrowError('Неверно указанный тип Error');
});

test('should match the specified properties', () => {
  const object = new Daemon('Илья', 'Daemon');
  expect(object.name).toBe('Илья');
  expect(object.type).toBe('Daemon');
  expect(object.attack).toBe(10);
  expect(object._attack).toBe(10);
  expect(object.defence).toBe(40);
});

test('should match the specified properties', () => {
  const object = new Magician('Максим', 'Magician');
  expect(object.name).toBe('Максим');
  expect(object.type).toBe('Magician');
  expect(object.attack).toBe(10);
  expect(object._attack).toBe(10);
  expect(object.defence).toBe(40);
});

test.each([
  { n: 1, expected: 0 },
  { n: 5, expected: 4 },
  { n: 11, expected: 10 },
])('should set the value of the attack property depending on n', ({ n, expected }) => {
  const object = new FixMD('FixMD', 'Magician');
  object.setAttack(n);
  expect(object.getAttack()).toBe(expected);
});

test('should the value of the function must match the _attack property', () => {
  const object = new FixMD('FixMD', 'Magician');
  expect(object.getAttack()).toBe(object._attack);
});

test.each([
  { n: 1, expected: 10 },
  { n: 5, expected: -1.609 },
  { n: 11, expected: -7.297 },
])('should set the value of the attack property depending on n', ({ n, expected }) => {
  const object = new FixMD('FixMD', 'Magician');
  object.setStoned(n);
  expect(object.getAttack()).toBeCloseTo(expected, 2);
});
