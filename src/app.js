
var control = true;

window.addEventListener('scroll', function() {

    var item = document.getElementById('author');

    var bounding = item.getBoundingClientRect();

    if (bounding.top >= 0  && bounding.bottom <= window.innerHeight) {
        control = true;
        document.getElementById('din-bar').classList.remove('sticky')
    } else {
        control = false;
        document.getElementById('din-bar').classList.add('sticky')

    }
    console.log(control);

});
