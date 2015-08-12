var markov = function(order) {

    this.originalText = '';
    this.atoms = [];
    this.order = order || 2; // ergh
    this.ngrams = {};

    this.init = function(text) {
        this.originalText = text;
        this.atoms = this.splitter(text);
        var ngrams = this.ngrams;
        var atoms = this.atoms;

        // this is not right -- the order is always 1, here...
        // plus, well, everything else
        for (var i = 0; i < atoms.length; i++) {
            var key = atoms.slice(i, i + this.order).join(' ');
            if (!ngrams[key]) {
                ngrams[key] = [];
            }
            if (i + this.order < atoms.length) {
                ngrams[key].push(atoms[i + this.order]);
            }
        }
        return true;
    };

    // start with the dumbest possible algorithm
    this.splitter = function(text) {
        var atoms = text.split(' ');
        return atoms;
    };


    // return {
    //     init: init,
    //     originalText: this.originalText,
    //     atoms: this.atoms,
    //     ngrams: this.ngrams
    // };

};
