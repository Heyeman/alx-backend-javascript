/* eslint no-underscore-dangle: 0 */
export default class Building {
  constructor(sqft) {
    if (typeof ('evacuationWarningMessage') === 'undefined') {
      return new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
