window.onload = function () {
  console.log('send')
  fetch('/getData')
  .then(function(response) {
    return response.json();
  })
  .catch(error => console.error('Error:', error))
}