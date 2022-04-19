export default class HolbertonCourse {
  /* eslint no-underscore-dangle: 0 */
/* eslint no-unused-vars: 0 */

  constructor(name, length, students) {
    const _name = '';
    const _length = '';
    const _students = [];
    if (typeof (name) === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }

    if (typeof (length) === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
    if (typeof (students) === 'object') {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof (newName) === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this.length;
  }

  set length(newLength) {
    if (typeof (newLength) === 'number') {
      this._length = newLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (typeof (newStudents) === 'object') {
      this._students = newStudents;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}
