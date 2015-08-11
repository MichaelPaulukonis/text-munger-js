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
            var key = '';
            if (!ngrams[atoms[i]]) {
                ngrams[atoms[i]] = [];
            }
            var followers = [];
            for (var j = 0; j < this.order; j++) {
                if (i+j < atoms.length) followers.push(atoms[i+j]);
            }
            ngrams[atoms[i]].push(followers);
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
