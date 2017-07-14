const openMap = document.querySelector('.map');
const myMap = document.querySelector('.modal-content-map');
const closeMap = myMap.querySelector('.modal-content-close');

openMap.addEventListener('click', function(event) {
    event.preventDefault();
    myMap.classList.add('map-show');
    layer.classList.add('show');
});

closeMap.addEventListener('click', function(event) {
    event.preventDefault();
    myMap.classList.remove('map-show');
    layer.classList.remove('show');
})

window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27 && myMap.classList.contains('map-show')) {
        myMap.classList.remove('map-show');
        layer.classList.remove('show');
    }
})
