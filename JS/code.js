 // Interactive elements
function safetyProcedure() {
    alert('Emergency procedure initiated!\n\n1. Open circuit breakers\n2. Disable converters\n3. Verify zero current');
    // Add visual alarm effects
    document.body.style.animation = 'pulseRed 0.5s 3';
}

// Quiz functionality
document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', function() {
        if(this.textContent === 'B. Reduced losses') {
            this.style.background = '#2ecc71';
            alert('Correct! HVDC has lower line losses over long distances.');
        } else if (this.textContent=== 'D. none'){
            this.style.background = '#2ecc71';
            alert('Correct! Min power transfer in one pole of Ethio-Kenya HVDC link is 6.5% of nominal.')
        }
            
        else 
            
        {
            this.style.background = '#e74c3c';
        }
    });
}); 

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
