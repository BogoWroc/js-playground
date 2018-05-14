// adding ; at the begin we ensure that other js libraries will not have an impact at our code
;(function (global, $) {

    // 'new' an object
    let Greeter = function (firstName, lastName, language) {
        return new Greeter.init(firstName, lastName, language);
    };

    // hidden within the scope of the IIFE and never directly accessible
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

    // prototype holds methods (to save memory space)
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
        },

        HTMLGreeting: function (selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            let msg;
            if (formal) {
                msg = this.formalGreetings();
            } else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }

    };

    // the actual object is created here, allowing us to 'new' an object without calling new
    Greeter.init = function (firstName, lastName, language) {
        let self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || supportedLangs[0];
        self.validate();
    };

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greeter.init.prototype = Greeter.prototype;

    // attach our Greeter to the global object
    global.Greeter = global.G$ = Greeter;

}(window, jQuery));