import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the parent class constructor with sqft
    super(sqft);
    this._floors = floors;
  }

  /**
   * Getter for sqft (Inherited from Building, but accessible here)
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Getter for floors
   */
  get floors() {
    return this._floors;
  }

  /**
   * Override the evacuationWarningMessage method
   * @returns {string}
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
