// Nav hamburgerburger selections
const burger = document.querySelector('#burger-menu');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');

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
/* paste this line in verbatim */
// window.formbutton =
//   window.formbutton ||
//   function () {
//     (formbutton.q = formbutton.q || []).push(arguments);
// };
/* customize formbutton below*/
// formbutton("create", {
//   action: "https://formspree.io/f/xlezadop",
//   title: "How can we help?",
//   fields: [
//     {
//       type: "email",
//       label: "Email:",
//       name: "email",
//       required: true,
//       placeholder: "your@email.com",
//     },
//     {
//       type: "textarea",
//       label: "Message:",
//       name: "message",
//       placeholder: "What's on your mind?",
//     },
//     { type: "submit" },
//   ],
//   styles: {
//     title: {
//       backgroundColor: "gray",
//     },
//     button: {
//       backgroundColor: "gray",
//     },
//   },
// });
