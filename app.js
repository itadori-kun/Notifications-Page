let test = document.querySelectorAll('.container')
let checkmark = document.getElementById('checkmark')


checkmark.addEventListener('click', function check () {
  for (let i = 0; i < test.length; i++) {
      if ( test[ i ].querySelector( '.dots' ) ) {
        test[i].classList.toggle('new')
    } 
  }
})

