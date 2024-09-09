document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.eye');
    btn.addEventListener('click', function () {
      let input = document.querySelector('#senha');
      if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
        btn.textContent = 'Esconder';
      } else {
        input.setAttribute('type', 'password');
        btn.textContent = 'Mostrar';
      }
    });
  });

  document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.querySelectorAll('input[type="checkbox"]').forEach(function(cb) {
                if (cb !== checkbox) {
                    cb.checked = false;
                }
            });
        }
    });
});