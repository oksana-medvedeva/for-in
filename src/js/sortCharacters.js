export default function sortCharacters(character, sortOrder) {
  const keys = Object.keys(character);
  keys.sort();
  const result = [];
  for (let index = 0; index < sortOrder.length; index += 1) {
    const key = sortOrder[index];
    result.push({ key, value: character[key] });
  }
  for (let index = 0; index < keys.length; index += 1) {
    const key = keys[index];
    if (!sortOrder.find((sortedKey) => sortedKey === key)) {
      result.push({ key, value: character[key] });
    }
  }
  return result;
}
