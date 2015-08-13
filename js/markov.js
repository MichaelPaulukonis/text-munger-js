var Markov = function(order) {

    if (!(this instanceof Markov)) {
        return new Markov(order);
    }

    this.originalText = '';
    this.atoms = [];
    this.order = order || 2; // ergh
    this.ngrams = {};
    this.keys = []; // will store the keys of ngram

    this.pick = function(arr) {
        return arr[Math.floor(Math.random()*arr.length)];
    };

    // NOTE: returns the value, not the key
    // might want a function to return the kvp
    // http://stackoverflow.com/a/15106541/41153
    this.randomProperty = function () {
        return this.ngrams[this.keys[this.keys.length * Math.random() << 0]];
    };

    // the generic-ness is all well-and-good
    // but we will only ever be looking at the ngrams object
    // and the keys can be pre-calculated
    // so we don't have to do it more than once, nu?
    // eh, wait on that...
    this.randomNGram = function() {
        var key = this.keys[this.keys.length * Math.random() << 0];
        return { key: key, value: this.ngrams[key] };
    };

    this.init = function(text) {
        this.originalText = text;
        this.atoms = this.splitter(text);
        var ngrams = this.ngrams;
        var atoms = this.atoms;

        for (var i = 0; i < atoms.length; i++) {
            var key = atoms.slice(i, i + this.order).join(' ');
            if (!ngrams[key]) {
                ngrams[key] = {
                    key: atoms.slice(i, i + this.order),
                    followers: []
                };

            }
            if (i + this.order < atoms.length) {
                ngrams[key].followers.push(atoms[i + this.order]);
            }
        }
        this.keys = Object.keys(ngrams);
        return true;
    };

    this.generate = function(len) {
        var words = [];

        // TODO: implement
        for (var i = 0; i < len; i ++) {

        }

        return words.join(' ');
    };


    // start with the dumbest possible algorithm
    this.splitter = function(text) {
        var atoms = text.split(' ');
        return atoms;
    };

};
