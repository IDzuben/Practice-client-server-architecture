
const getHtmlButton = document.getElementById('get-html');
const postDataButton = document.getElementById('post-data');
const getStatusButton = document.getElementById('get-status');
const responseDiv = document.getElementById('response');

function handleResponse(response) {
  response.text().then(text => {
    responseDiv.textContent = text;
  });
}

getHtmlButton.addEventListener('click', () => {
  fetch('http://localhost:3000/')
    .then(handleResponse)
    .catch(err => {
      responseDiv.textContent = `Error: ${err.message}`;
    });
});

postDataButton.addEventListener('click', () => {
  fetch('http://localhost:3000/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Alice', age: 25 })
  })
    .then(handleResponse)
    .catch(err => {
      responseDiv.textContent = `Error: ${err.message}`;
    });
});

getStatusButton.addEventListener('click', () => {
  fetch('http://localhost:3000/status')
    .then(handleResponse)
    .catch(err => {
      responseDiv.textContent = `Error: ${err.message}`;
    });
});
