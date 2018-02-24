(function() {
    let getBearByColorForm = document.getElementById('getBearByColor');

    getBearByColorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let getBearType = getBearByColorForm.elements['getBearType'].value;

        let xhr = new XMLHttpRequest();
        xhr.open('GET', '/api/bears/' + getBearType, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send();

        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            document.getElementById('getBearByColorName').innerText = xhr.responseText;
          }
        };
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
