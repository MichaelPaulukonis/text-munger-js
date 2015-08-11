// http://chaijs.com/
var expect = chai.expect;

describe("markov api", function() {

    var m = new markov();

    it("should have an init() method", function() {
        expect(typeof(m.init)).to.equal('function');
    });

    it("should have an 'originalText' property", function() {
        expect(typeof(m.originalText)).to.equal('string');
    });

    it("should have an 'atoms' property", function() {
        expect(typeof(m.atoms)).to.equal('object');
    });

});


describe("markov initialization", function() {

    var m = new markov();
    var source = "it will work, or it will not work";

    it("should not fail on init()", function() {
        expect(m.init(source)).to.equal(true);
    });

    it("should expose the original text, unmodified", function() {
        expect(m.originalText).to.equal(source);
    });

});

describe("markov tokenization", function() {

    // tokenization-level is hard-coded (no params)
    var expected = [ "it", "will", "work,", "or", "it", "will", "not", "work" ];
    var source = "it will work, or it will not work";
    var m = new markov();
    m.init(source);

    it("should turn '" + source + "' into 8 tokens", function() {
        expect(m.atoms.length).to.equal(8);
    });

});
