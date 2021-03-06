// http://chaijs.com/
var expect = chai.expect;

describe('markov tests', function() {

    describe('api', function() {

        var m = new Markov();

        it('should have an init() method', function() {
            expect(typeof(m.init)).to.equal('function');
        });

        it('should have a splitter() method', function() {
            expect(typeof(m.splitter)).to.equal('function');
        });

        it('should have a generate() method', function() {
            expect(typeof(m.generate)).to.equal('function');
        });

        it('should have a generate() method', function() {
            expect(typeof(m.generate)).to.equal('function');
        });

        it('should have an "originalText" property', function() {
            expect(typeof(m.originalText)).to.equal('string');
        });

        it('should have an "ngrams" property', function() {
            expect(typeof(m.ngrams)).to.equal('object');
        });

        it('should have an "order" property', function() {
            expect(typeof(m.order)).to.equal('number');
        });

    });


    describe('initialization', function() {

        var m = new Markov();
        var source = 'it will work or it will not work';

        it('should not fail on init()', function() {
            expect(m.init(source)).to.equal(true);
        });

        it('should expose the original text, unmodified', function() {
            expect(m.originalText).to.equal(source);
        });

        it('should have a default order of 2', function() {
            expect(m.order).to.equal(2);
        });

        it('passing a specific order should be retained', function() {
            var order = 5;
            var m = new Markov(order);
            expect(m.order).to.equal(order);
        });

    });

    describe('tokenization', function() {

        // tokenization-level is hard-coded (no params)
        var expected = [ 'it', 'will', 'work', 'or', 'it', 'will', 'not', 'work' ];
        var source = 'it will work or it will not work';
        var m = new Markov();
        // m.init(source);

        it('should turn "' + source + '" into 8 tokens', function() {
            expect(m.splitter(source).length).to.equal(8);
        });

    });

    describe('ngrams', function() {
        var source = 'it will work or it will not work';
        var m = new Markov();
        m.init(source);
        var numWords = 10;

        it('should give us a string with ' + numWords + ' tokens when we ask for 10', function() {
            var g = m.generate(numWords);
            var gWords = m.splitter(g).length;
            expect(gWords).to.equal(numWords);
        });
    });

});
