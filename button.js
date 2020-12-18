function changeColor() {
  var blueDiv = document.getElementById("changeable");
  blueDiv.style.backgroundColor = "lightgreen";
}

function replaceWord() {
  var wordable = document.getElementById('wordable');

  fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "your-api-key-here",
      "x-rapidapi-host": "api-host-here",
    },
  })
    .then((response) => {
      console.log(response);
      response.json().then(json => wordable.innerText = json.word);
    })
    .catch((err) => {
      console.error(err);
    });
}
