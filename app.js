// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels




// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
  // linksContainer.classList.toggle("show-links")
  // non dynamic height

  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = 0;
  }

})

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
// ********** fixed navbar ************
window.addEventListener('scroll', function(){
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight){
    navbar.classList.add('fixed-nav');
    topLink.classList.add('show-link')
  } else {
    navbar.classList.remove('fixed-nav');
    topLink.classList.remove('show-link');
  }

})


// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
  link.addEventListener('click', function(event){
    //prevent default
    event.preventDefault();
    //navigate to specific spot
    const id = event.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

// calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;

    if(fixedNav === false){
      position = position - navHeight;
    }

    if (navHeight > 82){
      position = position + containerHeight;
    }

      // setTimeout(function () { window.scrollTo(0, position); }, 100);


      window.scrollTo({
      left:0,
      top: position,
      });



    linksContainer.style.height = 0
  });
})
