/**
 * Updates the quantity of items with an initial quantity of 1 to 100.
 * @param {Map} map - The map of grocery items and their quantities.
 * @returns {Map} The updated map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });

  return map;
}
