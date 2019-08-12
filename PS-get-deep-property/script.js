var make = document.getElementById("make");
var deepObject = document.getElementById("deepObject");
var cars = {
    jeep: {
        model: 'Grand Cherokee',
        year: '2019',
        color: 'red'
    },

    chevy: {
        model: 'Camaro',
        year: '1979',
        color: 'black'
    },

    ford: {
        model: 'Mustang',
        year: '1965',
        color: 'yellow'
    }
};

function getModel() {
    var selectedValue = make.value;
    deepObject.innerHTML = cars[selectedValue].model;

    return;
}

function getYear() {
    var selectedValue = make.value;
    deepObject.innerHTML = cars[selectedValue].year;

    return;
}

function getColor() {
    var selectedValue = make.value;
    deepObject.innerHTML = cars[selectedValue].color;

    return;
}

