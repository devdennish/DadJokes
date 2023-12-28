//Getting tags from HTML//

const button = document.getElementById('btn');
const jokes = document.getElementById('jokes-content');

function getJokes() {
  fetch('https://icanhazdadjoke.com/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      jokes.innerHTML = data.joke;
    })
    .catch(() => {
      jokes.innerHTML = 'Something went wrong!!!';
    });
}

//Event Listeners//

button.addEventListener('click', getJokes);
document.addEventListener('DOMContentLoaded', getJokes);
