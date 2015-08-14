// TODO: connect the button to do stuff


var defaults = {
    output: '[munged text goes here]',
    input: 'TextMunger mangles your text in a variety of ways.\n\nEdit this text and try it out!'
};

var reset = function(input, output) {

    $('#output').text(output);
    $('#input').val(input);

};


$('#munge').click(function() {

    var text = $('#input').val().trim();

    if (text.length > 0) {

        var method = $('input[name=spelltype]:checked').val();
        var outputWordCount = $('#outputWordCount').val() || 200;
        var ngramLevel = $('#ngramLevel').val() || 2;

        // for now, we're only doing markov
        var m = new Markov(ngramLevel);
        m.init(text);

        try {
            var mtext = m.generate(outputWordCount);
        } catch (ex) {
            console.log('error:', ex.toString());
        }

        $('#output').text(mtext);

    }

    return false;

});


$('#clear').on('click', function() {

    reset('', defaults.output);
    return false;

});


var startup = function() {

    reset(defaults.input, defaults.output);

}();
