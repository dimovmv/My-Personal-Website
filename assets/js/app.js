// Nav hamburgerburger selections
const burger = document.querySelector('#burger-menu');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
let interval = null;

// Scroll to top selection
const scrollUp = document.querySelector('#scroll-up');

// Select nav links
const navLink = document.querySelectorAll('.nav-link');

// Hamburger menu function
burger.addEventListener('click', () => {
  ul.classList.toggle('show');
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener('click', () => {
    ul.classList.remove('show');
  })
);

// scroll to top functionality
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

// FORM
// Clear the form
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset();
  }
};

// Theme switcher functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  // Toggle the visibility of icons
  lightIcon.hidden = !lightIcon.hidden;
  darkIcon.hidden = !darkIcon.hidden;
});

// Initialize the theme icon based on the initial body class
if (body.classList.contains('dark-theme')) {
  darkIcon.hidden = false;
  lightIcon.hidden = true;
} else {
  darkIcon.hidden = true;
  lightIcon.hidden = false;
}

// Display Dynamic Year
// Get the current year
const currentYear = new Date().getFullYear();
// Update the content of the element with the current year
document.getElementById('currentYear').textContent = currentYear;

// Name with hacker effect

document.querySelector('h1').onmouseover = (event) => {
  clearInterval(interval);
  let iteration = 0;
  const targetText = event.target.dataset.value;

  interval = setInterval(() => {
    event.target.innerText = targetText
      .split('')
      .map((letter, index) => {
        if (index < iteration) {
          return targetText[index];
        }

        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join('');

    if (iteration >= targetText.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};
