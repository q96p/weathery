const apiKey = "47c2c3419227deed5b534c44753edba1"
const searchButton = document.getElementById("search-button")
const placeInput = document.getElementById("place-input")

searchButton.addEventListener("click", function () {
    if (placeInput.value != "") {
        fetch(generateStr(placeInput.value)).then(response => response.json()).then(function (data) {
            console.log(data);
        })
    }
});

function generateStr(place) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}`
}