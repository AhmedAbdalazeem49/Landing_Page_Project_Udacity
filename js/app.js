
/*
  * Define Global Variables
  * get element that i want to work with (list items & sections)
*/
// Ul which will contain all list Items 
let listItemsBox = document.getElementById("navbar__list");

// get sections of the landing page
let sectionsCollection = document.getElementsByTagName("section");
let sectionsArray = Array.from(sectionsCollection);

/**
 * End Global Variables
 * Start Helper Functions
 * function for making list items
 *  build the nav
 * Build menu 
*/

let createLIForSec = () =>
{
  for (liForSec of sectionsArray)
  {
    // Create element for each section
    LI = document.createElement("li");

    // Add the text for list item 
    LI.innerHTML = `<a href = "#${liForSec.id}" data-nav = "${liForSec.id}" class = "menu__link">${liForSec.dataset.nav}</a>`;

    // Add the list item to the nav menu
    listItemsBox.appendChild(LI);
  };
};
createLIForSec();

/**
 * End Helper Functions
 * Begin Main Functions
 * Styling the active class when scroll
 * Add class 'active' to section when near top of viewport
*/

window.onscroll = () =>
{
  // forEach on each section to know which is should have the active class
  document.querySelectorAll("section").forEach(function (sec)
  {

    // if the section in the viewport
    if
    (
      sec.getBoundingClientRect().top >= -400
      &&
      sec.getBoundingClientRect().top <= 150
    )
    
    // add the your-active-class to that section to have a different styling 
    {
      sec.classList.add("your-active-class");
    }

    else
    // remove active class from all rest sections || if it is not in the viewport
    {
      sec.classList.remove("your-active-class");
    };
  });
};

/**
 * End Main Functions
 * Begin Events
 * scroll to the appropriate section when clicking an item from nav menu
 * Scroll to section on link click
*/

listItemsBox.addEventListener("click", (tosection) =>
{
  tosection.preventDefault();
  if (tosection.target.dataset.nav)
  {
    // Making the scrolling smooth
    document.getElementById(`${tosection.target.dataset.nav}`).scrollIntoView({behavior:"smooth"});
  };
});
/**
 * End Events
*/