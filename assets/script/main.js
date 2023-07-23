// const iframeMenu = document.querySelector('.mRs_ifm');
// const iframeContainer = document.querySelector('.mRs_ifc');
// const overlay = document.querySelector('.overlay');

// iframeMenu.addEventListener('click', () => {
//   iframeContainer.classList.toggle('show-iframe');
//   overlay.classList.add('show-overlay');
// });

// overlay.addEventListener('click', () => {
//     overlay.classList.remove('show-overlay');
//     iframeContainer.classList.remove('show-iframe');
//   });

  console.log(
    `You are running a development build`
  );


const darkModeButton = document.getElementById('dark-mode-button');
const lightModeButton = document.getElementById('light-mode-button');
const body = document.body;

// Check if dark mode preference is saved in cookies
const darkModePreference = localStorage.getItem('darkMode');

// If dark mode preference exists in cookies, apply it
if (darkModePreference === 'true') {
  enableDarkMode();
}

darkModeButton.addEventListener('click', () => {
  enableDarkMode();
});

lightModeButton.addEventListener('click', () => {
  disableDarkMode();
});

function enableDarkMode() {
  body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'true');
  darkModeButton.classList.toggle('activeBtn');
  lightModeButton.classList.remove('activeBtn');
}

function disableDarkMode() {
  body.classList.remove('dark-mode');
  lightModeButton.classList.toggle('activeBtn');
  darkModeButton.classList.remove('activeBtn');
  localStorage.setItem('darkMode', 'false');
}



// const scrollContainer = document.querySelector('#cover-news');
// const scrollContent = document.querySelector('.cover-large');

// function scrollRight() {
//   scrollContainer.scrollLeft += 50; // Adjust the scroll amount as needed
// }
// const rightButton = document.querySelector('.rightbtn');
// rightButton.addEventListener('click', scrollRight);


const scrollContainer = document.querySelector('#cover-news');
const scrollContent = document.querySelector('.cover-large');
const leftButton = document.querySelector('.scroll-button-left');
const rightButton = document.querySelector('.scroll-button-right');

function scrollLeft() {
  scrollContainer.scrollLeft -= scrollContainer.offsetWidth; // Scroll by the container's width
}

function scrollRight() {
  scrollContainer.scrollLeft += scrollContainer.offsetWidth; // Scroll by the container's width
}

// Show/hide the buttons based on scroll position
scrollContainer.addEventListener('scroll', function() {
  leftButton.style.opacity = scrollContainer.scrollLeft > 0 ? 1 : 0;
  rightButton.style.opacity =
    scrollContainer.scrollLeft < scrollContent.offsetWidth - scrollContainer.offsetWidth ? 1 : 0;
});