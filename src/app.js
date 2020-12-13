var $ = function( id ) { return document.getElementById( id ); };

window.addEventListener('scroll', function() {

    var position = $('author').getBoundingClientRect();

    if (position.top >= 0  && position.bottom <= window.innerHeight) {
        $('din-bar').classList.remove('sticky')
    } else {
        $('din-bar').classList.add('sticky')
    }
});
