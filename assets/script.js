(function() {
    let createBearForm = document.getElementById('getBear');

    createBearForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let getBearId = createBearForm.elements['bearId'].value;

      if (getBearId) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '/api/bears/' + getBearId, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send();

        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            document.getElementById('getBearName').innerText = xhr.responseText;
          }
        };
      }
    }, false);

    let getBearsForm = document.getElementById('getBears');

    getBearsForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let xhr = new XMLHttpRequest();
      xhr.open('GET', '/api/bears', true);
      xhr.send();

      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          document.getElementById('getBearNames').innerText = xhr.responseText;
        }
      };
    }, false);
})();
