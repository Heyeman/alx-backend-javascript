export default class HolbertonCourse{
    /* eslint no-underscore-dangle: 0 */
    constructor(name, length, students) {
	if (typeof(name) == "string"){
	    let _name = name;
	}
	else{
	    throw new TypeError("Name must be a string");

	}
	if (typeof(length) == "number"){
	    let _length = length;
	}
	else{
	    throw new TypeError("Length must be a number");

	}
	if (typeof(students) == "object"){
	    let _students = students;
	}
	else{
	    throw new TypeError("Students must be an array");

	}
    }
    get name() {
	return this._name; }
    set name(newName)
    {
	
	
	
    
