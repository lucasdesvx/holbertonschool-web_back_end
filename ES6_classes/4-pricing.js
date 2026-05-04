import Currency from './3-currency.js';

export default class Pricing {
  /**
   * @param {number} amount - The amount of the price
   * @param {Currency} currency - An instance of the Currency class
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter and Setter for amount
  get amount() {
    return this._amount;
  }

  set amount(val) {
    this._amount = val;
  }

  // Getter and Setter for currency
  get currency() {
    return this._currency;
  }

  set currency(val) {
    this._currency = val;
  }

  /**
   * Returns the full price string
   * @returns {string} - Format: "amount currency_name (currency_code)"
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Static method to convert price based on a rate
   * @param {number} amount
   * @param {number} conversionRate
   * @returns {number} - The multiplied value
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
