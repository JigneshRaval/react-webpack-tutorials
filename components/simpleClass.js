// This is Example of new class syntex introduced in ES6
export class Test {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
    
    setName(name) {
        this.name = name;
    }
}

// Normal Class ( constructor function ) using ES5
export function News(name) {
    this.name = name;
}

News.prototype.getName = function() {
    console.log(this.name);
}