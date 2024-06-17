//slider function
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("product");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// form validation
const submit = document.getElementById('contactForm')

submit.addEventListener('submit', (event)=> {
    event.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

  
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (name === '' && message === '') {
      alert('Please enter your name and message.');
      return;
    }
    else if (name === '') {
      alert('Please enter your name.');
      return;
    }
    else if (message === '') {
      alert('Please enter your message.');
      return;
    }

    if(name!= '' && message != '' && isValidEmail(email))
      {
        alert('Form is Succesfully Submitted!');
        return;
      }
    
    this.reset();
});

// Validation of email 
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
  