export default class Currency{
    constructor(code, name){
        this.code = _code;
        this.name = _name;
    }
    get code(){
        return this._code;
    }
    get name(){
        return this._name;
    }
    set code(value){
        this._name = value;
    }
    set name(value){
        this._name = value;
    }
    displayFullCurrency(){
    return `${this._name} (${this._code})`;
    }
}