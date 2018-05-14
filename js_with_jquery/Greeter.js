(function (global, $) {

    let Greeter = function (firstName, lastName, language) {
        return new Greeter.init(firstName, lastName, language);
    };

    let supportedLangs = ['en', 'es'];

    let greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    let formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    let logMessages = {
        en: 'Logged in',
        es: 'Inició sessión'
    };

    Greeter.prototype = {
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function () {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greeting: function () {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreetings: function () {
            return formalGreetings[this.language] + ", " + this.fullName();
        },

        greet: function (formal) {
            let msg;

            if (formal) {
                msg = this.formalGreetings();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg)
            }

            return this;

        },

        log: function () {
            if (console) {
                console.log(logMessages[this.language]) + ": " + this.fullName();
            }

            return this;
        },

        setLang: function (lang) {
            this.language = lang;
            this.validate();

            return this
        }

    };

    Greeter.init = function (firstName, lastName, language) {
        let self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || supportedLangs[0];
        self.validate();
    };

    Greeter.init.prototype = Greeter.prototype;

    global.Greeter = global.G$ = Greeter;

}(window, jQuery));