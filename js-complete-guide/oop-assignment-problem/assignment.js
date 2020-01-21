class Course {
    #_title; // use # to mark field as private
    #_length;
    #_price;

    constructor(title, length, price) {
        this._title = title;
        this._length = length;
        this.price = price;
    }

    calc() {
        return this._length / this._price;
    }

    summary() {
        return `Title = ${this._title}, Length = ${this._length}, Price = ${this.price}`;
    }

    set price(value) {
        if (value < 0) {
            throw 'Invalid value'
        }
        this._price = value;
    }

    get price() {
        return `$${this._price}`;
    }

}

class PracticalCourse extends Course {
    _numOfExercises;

    constructor(title, length, price, numOfExercises) {
        super(title, length, price);
        this._numOfExercises = numOfExercises;
    }

    summary() {
        return super.summary() + `, NumOfExercises = ${this._numOfExercises}`;
    }
}

class TheoreticalCourse extends Course {
    publish() {
        console.log("Publish something");
    }
}

const c1 = new Course("JS", 50.5, 39);
const c2 = new Course("React", 34, 19);

console.log(c1.calc());
console.log(c2.calc());
console.log(c1.summary());
console.log(c2.summary());

const c3 = new PracticalCourse("Java", 60, 99, 345);
const c4 = new TheoreticalCourse("Big Data", 40, 9);

console.log(c3.summary());
console.log("Invoke")
console.log(c4.summary());
console.log(c4.publish());

