document.componentRegistry = { };
document.nextId = 0;

/**
* Базовый класс
**/
class Component {
    /**
    * Базовый класс
    **/
    constructor() {
        this._id = ++document.nextId;
        document.componentRegistry[this._id] = this;
    }
}

export default Component;
