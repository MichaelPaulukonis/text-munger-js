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


describe("markov init method", function() {

    var m = new markov();
    var source = "it will work, or it will not work";

    it("should not fail on init()", function() {
        expect(m.init(source)).to.equal(true);
    });


});
