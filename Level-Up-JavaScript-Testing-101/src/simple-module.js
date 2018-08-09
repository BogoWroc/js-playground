var car = (function () {
    var self = this;
    var model = "";

    return {
        setModel: function (model) {
            self.model = model;
        },
        getModel: function () {
            return self.model;
        }
    }
})();

car.setModel("Focus");
console.log(car.getModel("Focus"));



function test(){
    console.log("Argument length is "+arguments.length);
}


test();

