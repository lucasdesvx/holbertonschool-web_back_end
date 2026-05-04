export default class Currency {
  /**
   * @param {string} code - The currency code (e.g., '$')
   * @param {string} name - The currency name (e.g., 'Dollars')
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter and Setter for code
  get code() {
    return this._code;
  }

  set code(val) {
    this._code = val;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  /**
   * Returns the full currency string
   * @returns {string} - Format: "name (code)"
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
