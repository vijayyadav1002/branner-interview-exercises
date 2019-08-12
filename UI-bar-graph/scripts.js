
var data = [49, 8, 23, 57, 94, 78, 94, 54, 75, 63];

function drawBarChart(dataset, idOfContainer) {
    var chartContainer = _div(idOfContainer);
    if(typeof(dataset) != "object") {
        return;
    }

    var widthOfContainer = chartContainer.scrollWidth;

    var heightOfContainer = chartContainer.scrollHeight;

    var widthOfBar = parseInt(widthOfContainer / dataset.length) - 2;

    for(var i = 0; i < dataset.length; i++) {
        var divElement = document.createElement("div");
        divElement.setAttribute("class", "chartBar");

        divElement.style.marginLeft = parseInt(i * 2 + i * widthOfBar) + "px";
        divElement.style.height = parseInt(dataset[i]) + "px";
        divElement.style.width = parseInt(widthOfBar) + "px";
        divElement.style.top = (heightOfContainer - parseInt(dataset[i]) - 1) + "px";
        chartContainer.appendChild(divElement);
    }
    return false;
}

function _div(id) {
    return document.getElementById(id);
}

drawBarChart(data, "chartHolder");