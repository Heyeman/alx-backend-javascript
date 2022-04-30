/* eslint no-underscore-dangle: 0 */
export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && typeof ('evacuationWarningMessage') === 'undefined') {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
