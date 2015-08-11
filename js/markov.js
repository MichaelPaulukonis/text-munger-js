var markov = function() {

    this.originalText = '';
    this.atoms = [];
    this.order = 3; // ergh
    this.ngrams = {};

    var init = function(text) {
        this.originalText = text;
        this.atoms = splitter(text);
        var ngrams = this.ngrams;
        var atoms = this.atoms;

        // this is not right -- the order is always 1, here...
        // plus, well, everything else
        for (var i = 0; i < atoms.length; i++) {
            var key = atoms.slice(i, i + 2).join(' ');
            if (!ngrams[key]) {
                ngrams[key] = [];
            }
            if (i + 2 < atoms.length) {
                ngrams[key].push(atoms[i + 2]);
            }
        }
        return true;
    };

    // start with the dumbest possible algorithm
    var splitter = function(text) {
        var atoms = text.split(' ');
        return atoms;
    };


    return {
        init: init,
        originalText: this.originalText,
        atoms: this.atoms,
        ngrams: this.ngrams
    };

};
