// constructor function
function OldLibrary() {
    this.store = [];
    this.add = function(book) {
        this.store.push(book);
    }
}

OldLibrary.prototype = {
    toString() {
        let text = "[Store] books = \n";
        for (let book of this.store) {
            text = text +`\t${book}\n`;
        }

        return text;
    }
};

const oldLibrary = new OldLibrary();
const book = {
    title: "Some title",
    author: "Some author",
    toString: function () {
        return `[Book] author = '${this.author}', title = '${this.title}'`;
    }
};

oldLibrary.add(book);
console.log(oldLibrary.toString());
console.log(book);







class Book {
    #title;
    #author;

    constructor(title, author) {
        this.#title = title;
        this.#author = author;
    }

    get title() {
        return this.#title
    }

    get author() {
        return this.#author
    }

    toString() {
        return `[Book] author = '${this.author}', title = '${this.title}'`;
    }
}

class Library {
    #store;

    constructor() {
        this.#store = [];
    }

    add(book) {
        this.#store.push(book);
    }

    toString() {
        let text = "[Store] books = \n";
        for (let book of this.#store) {
            text = text +`\t${book}\n`;
        }

        return text;
    }
}

class CityLibrary extends Library {

    #cityName;


    constructor(cityName) {
        super();
        this.#cityName = cityName;
    }

    toString() {
        let text = super.toString();
        return `City = '${this.#cityName}, ${text}`;
    }
}

class App {

    static init() {
        const library = new Library();

        const book1 = new Book("Wiedzmin", "Andrzej Sapkowski");
        const book2 = new Book("Wojny wikingów", "Michael Cornwell");

        library.add(book1);
        library.add(book2);

        return library;
    }

}

const library = App.init();
console.log(library.toString());
console.dir(library);


let cityLibrary = new CityLibrary("Wroclaw");
console.log(cityLibrary);
console.log(cityLibrary.toString());


