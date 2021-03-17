function initialize() {
    retrieveDataFromJson();
}

function retrieveDataFromJson() {
    const xhr = new XMLHttpRequest();
    const url = "fruit.json";

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var fruits = JSON.parse(xhr.response).fruits;
            displayData(fruits);

            // Store contact data to localstorage
            const localStorage = window.localStorage;
            if (localStorage) {
                localStorage.setItem("fruits", JSON.stringify(fruits));
            }
        }
    };
    xhr.open("get", url);
    xhr.send();
}

function displayData(fruits) {
    fruits.forEach(addRow);
}

function addRow(fruit) {
    var row = tcontent.insertRow();
    var nameCell = row.insertCell();
    nameCell.innerHTML = fruit.name;
    var colorCell = row.insertCell();
    colorCell.innerHTML = fruit.color;
}
