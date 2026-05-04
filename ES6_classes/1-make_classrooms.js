import ClassRoom from './0-classroom.js';

/**
 * Creates an array of ClassRoom objects with specific sizes.
 * @returns {Array} An array containing three ClassRoom objects.
 */
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
