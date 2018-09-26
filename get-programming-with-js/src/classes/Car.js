class Car {
    constructor() {
        this.gas = 50;
        this.milage = 0;
    }

    hasGas() {
        return this.gas > 0;
    }

    drive() {
        if (this.hasGas()) {
            this.milage++;
            this.gas--;
        }
    }
}

class SuperCar extends Car {

    fuel(){
        this.gas = 50;
    }

    drive(miles) {
        for (let i = 0; i < miles; i++) {
            if(this.hasGas()) {
                super.drive();
            } else {
                console.log("No gas to continue :(");
                break;
            }
        }
    }
}

const car = new SuperCar();
car.drive(5);
console.log(car.gas);
car.fuel();
console.log(car.gas);
car.drive(55);