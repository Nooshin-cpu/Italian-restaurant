
    

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});





///flickity////
var flkty = new Flickity( '.main-carousel', {
  // options
  freeScroll: true,
wrapAround: true
});

    $('.button--previous').on( 'click', function() {
        $carousel.flickity('previous');
      });
      // previous wrapped
      $('.button--previous-wrapped').on( 'click', function() {
        $carousel.flickity( 'previous', true );
      });



      ////contact form////


      document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('.contact-form');
    
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form submission for demo purposes
    
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
    
            if (name && email && message) {
                alert('Form submitted successfully!');
                form.reset(); // Reset the form after submission
            } else {
                alert('Please fill in all fields!');
            }
        });
    });

   

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

