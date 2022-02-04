import Character from '../character';
import sortCharacters from '../sortCharacters';

test('should put keys in right order', () => {
  const character = new Character('Mark', 'Zombie');
  character.health = 50;
  character.level = 1;
  character.attack = 40;
  character.defence = 10;
  const sortOrder = ['name', 'level'];
  const result = sortCharacters(character, sortOrder);

  expect(result).toEqual([
    { key: 'name', value: 'Mark' },
    { key: 'level', value: 1 },
    { key: 'attack', value: 40 },
    { key: 'defence', value: 10 },
    { key: 'health', value: 50 },
    { key: 'type', value: 'Zombie' },
  ]);
});

test('should put keys in right order with empty sortOrder array', () => {
  const character = new Character('Mark', 'Zombie');
  character.health = 50;
  character.level = 1;
  character.attack = 40;
  character.defence = 10;
  const sortOrder = [];
  const result = sortCharacters(character, sortOrder);

  expect(result).toEqual([
    { key: 'attack', value: 40 },
    { key: 'defence', value: 10 },
    { key: 'health', value: 50 },
    { key: 'level', value: 1 },
    { key: 'name', value: 'Mark' },
    { key: 'type', value: 'Zombie' },
  ]);
});

test('should put keys in right order with full sortOrder array', () => {
  const character = new Character('Mark', 'Zombie');
  character.health = 50;
  character.level = 1;
  character.attack = 40;
  character.defence = 10;
  const sortOrder = ['name', 'type', 'defence', 'level', 'health', 'attack'];
  const result = sortCharacters(character, sortOrder);

  expect(result).toEqual([
    { key: 'name', value: 'Mark' },
    { key: 'type', value: 'Zombie' },
    { key: 'defence', value: 10 },
    { key: 'level', value: 1 },
    { key: 'health', value: 50 },
    { key: 'attack', value: 40 },
  ]);
});
