function initialize() {
    retrieveDataFromJson();
}

function retrieveDataFromJson() {
    const xhr = new XMLHttpRequest();
    const url = "fruit.json";

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var description = JSON.parse(xhr.response).description;
            displayDescription(description);
    
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

function displayDescription(description) {
    document.getElementById("description").innerHTML = description;
}

function displayData(fruits) {
    fruits.forEach(addFruit);
}

function addFruit(fruit) {
    var tcontent = document.getElementById("tcontent");
    var row = tcontent.insertRow();
    var nameCell = row.insertCell();
    nameCell.innerHTML = fruit.name;
    var colorCell = row.insertCell();
    colorCell.innerHTML = fruit.color;
}
