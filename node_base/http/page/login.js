window.onload = function () {
  console.log('send')
  const submit = document.getElementById("submit");
  submit.onclick= function () {
    const studentNum = document.getElementById("stuNum").value;
    const password = document.getElementById("password").value;
    let data = {
      studentNum,
      password
    }
   fetch('/login', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: new Headers({
      'Content-Type': 'application/json'
    })
   })
    .then(function(response) {
      return response.text().then(res => {
        let p = document.createElement('p')
        p.innerHTML = res
        document.body.append(p)
      })
    })
    .catch(error => console.error('Error:', error))
  }
}