export default class HolbertonCourse{
    /* eslint no-underscore-dangle: 0 */
    constructor(name, length, students) {
	this.name(name);
	this.length(length);
	 this.students(students);
	
	
    }
    get name() {
	return this._name; }
    set name(newName)
    {
	    if (typeof(newName) == "string"){
	    let _name = newName;
	}
	else{
	    throw new TypeError("Name must be a string");

	}
    }
	get length(){
		return this.length;}
	set length(newLength) {
	if (typeof(newLength) == "number"){
	    let _length = newLength;
	}
	else{
	    throw new TypeError("Length must be a number");

	}
	}
	get students(){
	return this._students;}
	set students(newStudents){
	if (typeof(newStudents) == "object"){
	    let _students = newStudents;
	}
	else{
	    throw new TypeError("Students must be an array");

	}
	}  

}
	
	
	
	
	
    
