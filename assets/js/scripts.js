
/*  
  ----------------------------------------------------------------------------------------------------------------------------------------------
  -----      Mailchimp configuration settings:                                                                                             -----
  -----      1. Replace 'enter_your_form_action_url_here' with the actual action attribute value of the embedded form from Mailchimp.      -----
  -----      2. Check the documentation for setup instructions!                                                                            -----
  ----------------------------------------------------------------------------------------------------------------------------------------------
*/

const formActionURL = `https://gmail.us22.list-manage.com/subscribe/post?u=59d71c0674faf9a48643d9394&amp;id=2a1ab82bf9&amp;f_id=00c1d8e1f0`;





/*  
  -------------------------------------------------------------------------------------------------------------------------------------
  -----      Algolia configuration settings:                                                                                      -----
  -----      1. Replace 'enter_your_application_id_here', 'enter_your_search_api_key_here', and 'enter_your_index_name_here'      -----
  -----         with your specific Algolia credentials.                                                                           -----
  -----      2. Check the documentation for setup instructions!                                                                   -----
  -------------------------------------------------------------------------------------------------------------------------------------
*/

// enter_your_application_id_here : Your Algolia Application ID
const ALGOLIA_APP_ID = "X3C0SGUMI8";
// enter_your_search_api_key_here : Your Algolia Search API Key        
const ALGOLIA_SEARCH_KEY = "fcd655752464fe72b0c35d9492579a3a";
// enter_your_index_name_here :The name of the Algolia index you created (Usually, this is the name of the JSON file you uploaded!). 
const ALGOLIA_INDEX_NAME = "services_templates_1";





/*  
  -------------------------------------------------------------------------------------
  -----      Initialize tooltips and popovers, and retrieve the 'dir' value.      -----
  -------------------------------------------------------------------------------------
*/

// Initialize tooltips if they exist
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
if (tooltipTriggerList.length > 0) {
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

// Initialize popovers if they exist
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
if (popoverTriggerList.length > 0) {
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
}

// Get the value of the 'dir' attribute, or set it to 'ltr' if it doesn't exist
var htmlElement = document.querySelector('html');
if (htmlElement) {
    var textDirectionOfTheDom = htmlElement.getAttribute('dir') || 'ltr';
}





/*  
  ------------------------------------------------------------------------------------
  -----      Loader animation before displaying the page and initialize AOS      -----
  ------------------------------------------------------------------------------------
*/

window.addEventListener("load", function(event){
    var loaderWrapper = document.querySelector('.loader-wrapper');
    if (loaderWrapper) {
        // Start the fade-out transition
        loaderWrapper.classList.remove("opacity-100", "w-100");
        loaderWrapper.classList.add("opacity-0", "w-0");

        // After the transition duration, set display to none
        setTimeout(() => {
            loaderWrapper.classList.remove("d-flex");
            loaderWrapper.classList.add("d-none");
        }, 1000); // Match this duration with the transition duration

    } 

    // After the transition duration, check if AOS is defined and the first [data-aos] element exists
    setTimeout(() => {
        if (typeof AOS === 'object' && document.querySelector('[data-aos]')) {
            AOS.init({
                offset: 0,
                once: true,
            });
        }
    }, 500); // Set this duration with half of the transition duration  
})





/*  
  -----------------------------------------------------------------------------
  -----      Automatically update all elements with the current year      -----
  -----------------------------------------------------------------------------
*/

// Get the current year
var currentYear = new Date().getFullYear();

// Select all elements with the class 'current-year'
var currentYearTags = document.querySelectorAll(".current-year");

// Check if there are elements with the class 'current-year'
if (currentYearTags.length > 0) {
    // Update the text content of each selected element with the current year
    currentYearTags.forEach(tag => {
        tag.textContent = currentYear;
    });
}





/*  
  ----------------------------------------------------------
  -----      Button for scrolling back to the top      -----
  ----------------------------------------------------------
*/

// Select the back-to-top button
let btnBackToTop = document.querySelector(".btn-back-to-top");

// Function to scroll to the top of the page
function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Function to show or hide the button based on scroll position
function scrollbtnBackToTopFun() {
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        btnBackToTop.classList.add("d-inline-flex"); // Show the button
        btnBackToTop.classList.remove("d-none"); // Show the button
    } else {
        btnBackToTop.classList.add("d-none"); // Hide the button
        btnBackToTop.classList.remove("d-inline-flex"); // Hide the button
    }
}

// Check if the button exists before
if (btnBackToTop) {
    // Attaching scroll event
    window.onscroll = function () {
        scrollbtnBackToTopFun();
    };

    // Adding click event listener
    btnBackToTop.addEventListener("click", backToTop);
}





/*  
  ------------------------------------------
  -----      Header Top Navigation     -----
  ------------------------------------------
*/

// Function to add or remove class based on window width
function handleResizeWidth() {
    if (window.innerWidth < 576) {
        navigation.classList.remove(lastMaxWidthAdded);
        navigation.classList.add("max-w-xs");
        lastMaxWidthAdded = "max-w-xs";
    } else if (window.innerWidth < 768) {
        navigation.classList.remove(lastMaxWidthAdded);
        navigation.classList.add("max-w-lg");
        lastMaxWidthAdded = "max-w-lg";
    } else if (window.innerWidth < 992) {
        navigation.classList.remove(lastMaxWidthAdded);
        navigation.classList.add("max-w-xl");
        lastMaxWidthAdded = "max-w-xl";
    } else if (window.innerWidth < 1200) {
        navigation.classList.remove(lastMaxWidthAdded);
        navigation.classList.add("max-w-3xl");
        lastMaxWidthAdded = "max-w-3xl";
    } else {
        navigation.classList.remove(lastMaxWidthAdded);
        navigation.classList.add("max-w-5xl");
        lastMaxWidthAdded = "max-w-5xl";
    }
}

let lastMaxWidthAdded = "max-w-5xl";

const navigation = document.querySelector('.navigation');
if (navigation) {
    
    // navigation.style.transition = 'top 1s';
    navigation.classList.add("transition-all", "duration-1000", "delay-150");
    let lastScrollTop = 0;

    // Combined function to handle both resize and scroll events
    function handleResizeAndScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            if (scrollTop > 700) {
                navigation.classList.add("fixed-top", "border", "bg-body", "shadow");
                navigation.classList.remove("position-absolute", "mt-sm-5", "mt-xl-6");
                navigation.style.top = '-1024px'; // Hide the navigation menu
                handleResizeWidth();
            }
        } else {
            // Scrolling up
            if (scrollTop > 700) {
                navigation.classList.add("fixed-top", "border", "bg-body", "shadow");
                navigation.classList.remove("position-absolute", "mt-sm-5", "mt-xl-6");
                navigation.style.top = '0'; // Show the navigation menu
                handleResizeWidth();
            } else {
                navigation.classList.remove("fixed-top", "border", "bg-body", "shadow");
                navigation.classList.add("position-absolute", "mt-sm-5", "mt-xl-6");
                navigation.style.top = ''; // Reset top style
                navigation.classList.remove(lastMaxWidthAdded);
            }
        }

        lastScrollTop = scrollTop;
    }

    // Add event listeners for both resize and scroll
    window.addEventListener('resize', handleResizeAndScroll);
    window.addEventListener('scroll', handleResizeAndScroll);
}

// Add an active class to the navigation on the current page
document.addEventListener("DOMContentLoaded", function() {
    // Get the current page's filename
    const currentPageName = window.location.pathname.split("/").pop();

    // Function to activate the current page link
    function activateCurrentPage(links) {
        links.forEach(link => {
            if (link.getAttribute("href") === `./${currentPageName}`) {
                link.classList.add("active");
                link.setAttribute("aria-current", "page");
            }
        });
    }

    // Get the header element
    const headerElement = document.querySelector("header");
    if (headerElement) {
        // Exclude elements within #bd-theme-light-dark-auto
        const excludeSelector = "#bd-theme-light-dark-auto, #bd-theme-light-dark-auto *";

        // Get all navigation links within the header, excluding #bd-theme-light-dark-auto
        const headerNavLinks = headerElement.querySelectorAll(`.nav-link:not(${excludeSelector})`);
        if (headerNavLinks.length > 0) {
            activateCurrentPage(headerNavLinks);
        }

        // Get all dropdown items within the header, excluding #bd-theme-light-dark-auto
        const headerDropdownItems = headerElement.querySelectorAll(`.dropdown-item:not(${excludeSelector})`);
        if (headerDropdownItems.length > 0) {
            activateCurrentPage(headerDropdownItems);
        }

        // Get all dropdown buttons within the header and activate based on dropdown items, excluding #bd-theme-light-dark-auto
        const headerDropdownButtons = headerElement.querySelectorAll(`.dropdown-toggle:not(${excludeSelector})`);
        if (headerDropdownButtons.length > 0 && headerDropdownItems.length > 0) {
            headerDropdownItems.forEach(item => {
                if (item.classList.contains("active")) {
                    const dropdownButton = item.closest(".dropdown").querySelector(`.dropdown-toggle:not(${excludeSelector})`);
                    if (dropdownButton) {
                        dropdownButton.classList.add("active");
                    }
                }
            });
        }
    }
});





/*  
  -------------------------------------------------------------------
  -----      Handle Contact Form Submission and Validation      -----
  -------------------------------------------------------------------
*/

// Alert messages for different contact form submission outcomes
const alertMessagesContactForm = {
    success: `
        <div class="alert alert-success d-flex gap-4 p-4 max-w-2xl mt-5" role="alert">
            <svg class="bi flex-shrink-0 text-success" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" /> </svg>

            <div class="text-pretty">
                <h3 class="m-0 text-sm fw-semibold">
                    Thank you! Your message has been successfully sent.
                </h3>

                <p class="m-0 mt-2 text-sm">
                    We will contact you soon.
                </p>
            </div>
        </div>
    `,

    danger: `
        <div class="alert alert-danger d-flex gap-4 p-4 max-w-2xl mt-5" role="alert">
            <svg class="bi flex-shrink-0 text-danger" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" /> </svg>

            <div class="text-pretty">
                <h3 class="m-0 text-sm fw-semibold">
                    Oops! Your message was not sent.
                </h3>

                <p class="m-0 mt-2 text-sm">
                    Invalid email address. Please change your email and try again.
                </p>
            </div>
        </div>
    `,
    
    warning: `
        <div class="alert alert-warning d-flex gap-4 p-4 max-w-2xl mt-5" role="alert">
            <svg class="bi flex-shrink-0 text-warning" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" /> </svg>

            <div class="text-pretty">
                <h3 class="m-0 text-sm fw-semibold">
                    Oops! Your message was not sent.
                </h3>

                <p class="m-0 mt-2 text-sm">
                    Please try again.
                </p>
            </div>
        </div>
    `,

    secondary: `
        <div class="alert alert-secondary d-flex gap-4 p-4 max-w-2xl mt-5" role="alert">
            <svg class="bi flex-shrink-0 text-secondary" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" /> </svg>

            <div class="text-pretty">
                <h3 class="m-0 text-sm fw-semibold">
                    Thank you for submitting your message.
                </h3>

                <p class="m-0 mt-2 text-sm">
                    Please wait a moment while we process it.
                </p>
            </div>
        </div>
    `
};

// Get form and message container elements
const contactForm = document.querySelector('#contactForm');
const alertMessageContactForm = document.querySelector('#alertMessageContactForm');
const submitMessageButtonContactForm = document.querySelector('#submitMessageButtonContactForm');

// Check if the form exists
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Check if the form is valid
        if (!contactForm.checkValidity()) {
            // If the form is invalid, show validation errors and warning alert
            contactForm.classList.add('was-validated');
            alertMessageContactForm.innerHTML = alertMessagesContactForm.warning;
            submitMessageButtonContactForm.disabled = false;
        } else {
            // If the form is valid, process the form submission
            const data = new FormData(contactForm);
            submitMessageButtonContactForm.disabled = true;

            // Show secondary alert while processing
            alertMessageContactForm.innerHTML = alertMessagesContactForm.secondary;

            // Send form data to the server
            fetch("https://contact.tigmatemplate.me/assets/php/contact.php", {
                method: "post",
                body: data
            })
            .then(response => response.text())
            .then(text => {
                if (text === 'Email Sent') {
                    // If email is sent successfully, reset form and show success alert
                    contactForm.reset();
                    contactForm.classList.remove('was-validated');
                    alertMessageContactForm.innerHTML = alertMessagesContactForm.success;
                } else if (text === 'Invalid email address') { 
                    // Show danger alert for invalid email 
                    alertMessageContactForm.innerHTML = alertMessagesContactForm.danger; 
                } else {
                    // Show warning alert for other errors
                    alertMessageContactForm.innerHTML = alertMessagesContactForm.warning;
                }
                submitMessageButtonContactForm.disabled = false;
            })
            .catch(error => {
                console.error('Error:', error);
                // Show warning alert in case of fetch error
                alertMessageContactForm.innerHTML = alertMessagesContactForm.warning;
                submitMessageButtonContactForm.disabled = false;
            });
        }
    }, false);
}





/*  
  -------------------------------------------------------------------
  -----      Handle Booking Form Submission and Validation      -----
  -------------------------------------------------------------------
*/

// Alert messages for different booking form submission outcomes
const alertMessagesBookingForm = {
    success: `
        <div class="alert alert-success d-flex gap-4 p-4 max-w-2xl mt-5" role="alert">
            <svg class="bi flex-shrink-0 text-success" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" /> </svg>

            <div class="text-pretty">
                <h3 class="m-0 text-sm fw-semibold">
                    Thank you! Your reservation has been successfully sent.
                </h3>

                <p class="m-0 mt-2 text-sm">
                    We will contact you soon.
                </p>
            </div>
        </div>
    `,

    danger: `
        <div class="alert alert-danger d-flex gap-4 p-4 max-w-2xl mt-5" role="alert">
            <svg class="bi flex-shrink-0 text-danger" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" /> </svg>

            <div class="text-pretty">
                <h3 class="m-0 text-sm fw-semibold">
                    We're sorry, but we couldn't process your request.
                </h3>

                <p class="m-0 mt-2 text-sm">
                    Invalid email address. Please change your email and try again.
                </p>
            </div>
        </div>
    `,
    
    warning: `
        <div class="alert alert-warning d-flex gap-4 p-4 max-w-2xl mt-5" role="alert">
            <svg class="bi flex-shrink-0 text-warning" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" /> </svg>

            <div class="text-pretty">
                <h3 class="m-0 text-sm fw-semibold">
                    We're sorry, but we couldn't process your request.
                </h3>

                <p class="m-0 mt-2 text-sm">
                    Please try again.
                </p>
            </div>
        </div>
    `,

    secondary: `
        <div class="alert alert-secondary d-flex gap-4 p-4 max-w-2xl mt-5" role="alert">
            <svg class="bi flex-shrink-0 text-secondary" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" /> </svg>

            <div class="text-pretty">
                <h3 class="m-0 text-sm fw-semibold">
                    Thank you for submitting your reservation.
                </h3>

                <p class="m-0 mt-2 text-sm">
                    Please wait a moment while we process it.
                </p>
            </div>
        </div>
    `
};

// Get form and message container elements
const bookingForm = document.querySelector('#bookingForm');
const alertMessageBookingForm = document.querySelector('#alertMessageBookingForm');
const submitMessageButtonBookingForm = document.querySelector('#submitMessageButtonBookingForm');

// Check if the form exists
if (bookingForm) {
    bookingForm.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Check if the form is valid
        if (!bookingForm.checkValidity()) {
            // If the form is invalid, show validation errors and warning alert
            bookingForm.classList.add('was-validated');
            alertMessageBookingForm.innerHTML = alertMessagesBookingForm.warning;
            submitMessageButtonBookingForm.disabled = false;
        } else {
            // If the form is valid, process the form submission
            const data = new FormData(bookingForm);
            submitMessageButtonBookingForm.disabled = true;

            // Show secondary alert while processing
            alertMessageBookingForm.innerHTML = alertMessagesBookingForm.secondary;

            // Send form data to the server
            fetch("https://contact.tigmatemplate.me/assets/php/booking.php", {
                method: "post",
                body: data
            })
            .then(response => response.text())
            .then(text => {
                if (text === 'Email Sent') {
                    // If email is sent successfully, reset form and show success alert
                    bookingForm.reset();
                    bookingForm.classList.remove('was-validated');
                    alertMessageBookingForm.innerHTML = alertMessagesBookingForm.success;
                } else if (text === 'Invalid email address') { 
                    // Show danger alert for invalid email 
                    alertMessageBookingForm.innerHTML = alertMessagesBookingForm.danger; 
                } else {
                    // Show warning alert for other errors
                    alertMessageBookingForm.innerHTML = alertMessagesBookingForm.warning;
                }
                submitMessageButtonBookingForm.disabled = false;
            })
            .catch(error => {
                console.error('Error:', error);
                // Show warning alert in case of fetch error
                alertMessageBookingForm.innerHTML = alertMessagesBookingForm.warning;
                submitMessageButtonBookingForm.disabled = false;
            });
        }
    }, false);
}





/*  
  --------------------------------------------------------------
  -----      Managing the Mailchimp subscription form      -----
  --------------------------------------------------------------
*/

(function () {
    // Get all forms with the class "mc-embedded-subscribe-form"
    var mcEmbeddedSubscribeForms = document.querySelectorAll('.mc-embedded-subscribe-form');

    if (mcEmbeddedSubscribeForms.length > 0) {
        mcEmbeddedSubscribeForms.forEach(function (subscribeForm) {
            subscribeForm.setAttribute('action', formActionURL);

            // Display response message
            var responseDiv = subscribeForm.querySelector('.js-subscribe-response');
            
            subscribeForm.addEventListener('submit', function (e) {
                e.preventDefault();

                // Check for spam
                if(subscribeForm.querySelector('.js-validate-robot').value !== '') {
                    responseDiv.innerHTML = `
                        <div class="alert alert-danger d-flex gap-4 p-4 max-w-2xl mt-2" role="alert">
                            <svg class="bi flex-shrink-0 text-danger" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" /> </svg>

                            <div class="text-pretty">
                                <h3 class="m-0 text-sm fw-semibold">
                                    Error: Spam submission detected.
                                </h3>

                                <p class="m-0 mt-2 text-sm">
                                    Please ensure you are not a robot and try again.
                                </p>
                            </div>
                        </div>
                    `;
                    return false;
                }

                // Get URL for Mailchimp
                var url = this.action.replace('/post?', '/post-json?') + "&c=callback";

                // Add form data to object
                var data = '';
                var inputs = this.querySelectorAll('.js-form-inputs input');
                inputs.forEach(function(input) {
                    data += '&' + input.name + '=' + encodeURIComponent(input.value);
                });

                // Create & add post script to the DOM
                var script = document.createElement('script');
                script.src = url + data;
                document.body.appendChild(script);

                // Callback function
                var callback = 'callback';
                window[callback] = function(data) {
                    // Remove post script from the DOM
                    delete window[callback];
                    document.body.removeChild(script);

                    if (data.result === "success") {
                        responseDiv.innerHTML = `
                            <div class="alert alert-success d-flex gap-4 p-4 max-w-2xl mt-2" role="alert">
                                <svg class="bi flex-shrink-0 text-success" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" /> </svg>

                                <div class="text-pretty">
                                    <h3 class="m-0 text-sm fw-semibold">
                                        ${data.msg}
                                    </h3>

                                    <p class="m-0 mt-2 text-sm">
                                        Welcome to our newsletter. Get ready for valuable insights delivered directly to your inbox.
                                    </p>
                                </div>
                            </div>
                        `;
                        subscribeForm.reset();
                    } else {
                        responseDiv.innerHTML = `
                            <div class="alert alert-warning d-flex gap-4 p-4 max-w-2xl mt-2" role="alert">
                                <svg class="bi flex-shrink-0 text-warning" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" /> </svg>

                                <div class="text-pretty">
                                    <h3 class="m-0 text-sm fw-semibold">
                                        ${data.msg}
                                    </h3>

                                    <p class="m-0 mt-2 text-sm">
                                        Oops! It looks like there was an issue processing your subscription. Please try again. We're here to assist!
                                    </p>
                                </div>
                            </div>
                        `;
                    }
                };
            });
        });
    }
})();





/*  
  ----------------------------------------------
  -----      Embed a video in a modal      -----
  ----------------------------------------------
*/

var videoBtnModal = document.querySelectorAll('.video-btn-modal');

if (videoBtnModal.length > 0) {
    var iframeVideo;
    var videoSrc;
    var videoDataBsTarget;
    var videoDataBsTargetModale;

    videoBtnModal.forEach(element => {
        element.addEventListener('click', function(e){

            videoSrc = element.getAttribute('data-bs-src');
            videoDataBsTarget = element.getAttribute('data-bs-target');

            iframeVideo = document.querySelector(videoDataBsTarget + " .iframeVideo");

            videoDataBsTarget = videoDataBsTarget.slice(1);
            videoDataBsTargetModale = document.getElementById(videoDataBsTarget);

            videoDataBsTargetModale.addEventListener('shown.bs.modal',(e)=>{
                iframeVideo.setAttribute('src', videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0');
            })

            videoDataBsTargetModale.addEventListener('hide.bs.modal',(e)=>{
                iframeVideo.setAttribute('src', '');
            })

        })
    })
}





/*  
  --------------------------------------------
  -----      Using Glide.js Library      -----
  --------------------------------------------
*/

// Select all elements with the class 'glide'
const glideElements = document.querySelectorAll('.glide');

// Check if Glide is defined and there are elements to initialize
if (typeof Glide === 'function' && glideElements.length > 0) {
    // Create an object to store the options for each class
    const glideOptions = {
        glideHighLinear: {
            direction: textDirectionOfTheDom,
            type: 'carousel',
            focusAt: 'center',
            startAt: 4,
            perView: 7,
            breakpoints: {
                2560: { perView: 7 },
                1500: { perView: 6 },
                1400: { perView: 6 },
                1200: { perView: 5 },
                992: { perView: 4 },
                768: { perView: 3 },
                576: { perView: 2 }
            },
            autoplay: true,
            animationDuration: 3000,
            animationTimingFunc: 'linear'
        },

        glideLowGap: {
            direction: textDirectionOfTheDom,
            type: 'carousel',
            perView: 3.25,
            focusAt: 0,
            autoplay: 10000,
            gap: 20,
            breakpoints: {
                1400: { perView: 2.8 },
                1200: { perView: 2.35 },
                992: { perView: 1.77 },
                768: { perView: 1.32 },
                576: { perView: 1 }
            }
        },

        // Add more classes and options as needed
    };

    glideElements.forEach(element => {
        const classList = element.classList;
        const className = classList[1];
        const option = glideOptions[className];

        // Create and mount the Glide instance
        const glide = new Glide(element, option);
        glide.mount();

        let glideArrowRight = element.querySelector(".glide__arrow--right");
        let glideArrowLeft = element.querySelector(".glide__arrow--left");

        if (glideArrowRight) {
            glideArrowRight.addEventListener("click", () => {
                glide.go(">");
            });
        }

        if (glideArrowLeft) {
            glideArrowLeft.addEventListener("click", () => {
                glide.go("<");
            });
        }
    });
}





/*  
  --------------------------------------------------------------------------------------  
  -----      Adjust the annual price based on the applied discount percentage      -----
  --------------------------------------------------------------------------------------
*/

// Select the pricing toggle checkbox
let checkboxPrice = document.querySelector('#checkboxPricing');

if (checkboxPrice) {
    // Select the annually outlined checkbox
    let primaryAoutlinedAnnually = document.querySelector('#primary-outlined-annually');

    // Select elements for different pricing tiers
    let essentialPrice = document.querySelector('.essentialPricing');
    let premiumPrice = document.querySelector('.premiumPricing');
    let enterprisePrice = document.querySelector('.enterprisePricing');
    let reductionPrice = document.querySelector('.reductionPricing');

    // Select elements for displaying price per period
    let essentialPer = document.querySelector('.essentialPer');
    let premiumPer = document.querySelector('.premiumPer');
    let enterprisePer = document.querySelector('.enterprisePer');

    // Get initial price values
    let essentialPriceValue = parseFloat(essentialPrice.innerText);
    let premiumPriceValue = parseFloat(premiumPrice.innerText);
    let enterprisePriceValue = parseFloat(enterprisePrice.innerText);
    let reductionPriceValue = parseFloat(reductionPrice.innerText) / 100;

    // Function to update prices based on yearly or monthly selection
    function updatePrices() {
        if (primaryAoutlinedAnnually.checked) {
            essentialPrice.innerText = Math.floor(essentialPriceValue * (1 - reductionPriceValue) * 12);
            premiumPrice.innerText = Math.floor(premiumPriceValue * (1 - reductionPriceValue) * 12);
            enterprisePrice.innerText = Math.floor(enterprisePriceValue * (1 - reductionPriceValue) * 12);

            essentialPer.innerText = "/year";
            premiumPer.innerText = "/year";
            enterprisePer.innerText = "/year";
        } else {
            essentialPrice.innerText = essentialPriceValue;
            premiumPrice.innerText = premiumPriceValue;
            enterprisePrice.innerText = enterprisePriceValue;

            essentialPer.innerText = "/month";
            premiumPer.innerText = "/month";
            enterprisePer.innerText = "/month";
        }
    }

    // Initial price update based on current selection
    updatePrices();

    // Add event listener to the checkbox to update prices on click
    checkboxPrice.addEventListener('click', function () {
        updatePrices();
    });
}





/*  
  -------------------------------------  
  -----      Timer countdown      -----
  -------------------------------------
*/

// Get all elements with the class 'timer-countdown'
var timers = document.querySelectorAll('.timer-countdown'); 

// Check if there are any elements with the class 'timer-countdown'
if (timers.length > 0) {

    // Function to update the timer values
    function updateTimer(element) {
        var futureDate = element.getAttribute("data-future-date"); // Get the future date from the attribute
        var future = Date.parse(futureDate); // Parse the future date
        var now = new Date(); // Get the current date and time
        var diff = future - now; // Calculate the difference in milliseconds

        var days = Math.floor(diff / (1000 * 60 * 60 * 24)); // Calculate days
        var hours = Math.floor(diff / (1000 * 60 * 60)); // Calculate hours
        var mins = Math.floor(diff / (1000 * 60)); // Calculate minutes
        var secs = Math.floor(diff / 1000); // Calculate seconds

        var d = days;
        var h = hours - days * 24;
        var m = mins - hours * 60;
        var s = secs - mins * 60;

        // Store the queried elements in variables
        var daysElement = element.querySelector(".timer-days");
        var hoursElement = element.querySelector(".timer-hours");
        var minutesElement = element.querySelector(".timer-minutes");
        var secondsElement = element.querySelector(".timer-seconds");

        // Check if elements exist and update their content
        if (daysElement) {
            daysElement.textContent = d;
        }
        if (hoursElement) {
            hoursElement.textContent = h;
        }
        if (minutesElement) {
            minutesElement.textContent = m;
        }
        if (secondsElement) {
            secondsElement.textContent = s;
        }
    }

    // Function to start the timers
    function startTimers() {
        timers.forEach(function(timer) {
            setInterval(function() {
                updateTimer(timer); // Update the timer every second
            }, 1000);
        });
    }

    // Start the timers when the page loads
    startTimers();
}





/*  
  --------------------------------------
  -----      Gallery Container     -----
  --------------------------------------
*/

// Get all the Gallery Containers
const galleryContainer = document.querySelectorAll('.gallery-container');

if (galleryContainer.length > 0) {
    galleryContainer.forEach(allGalleryItems => {

        // Get references to the gallery items and toggle button
        var galleryItems = allGalleryItems.querySelector('.gallery-items');
        var galleryToggleBtn = allGalleryItems.querySelector('.gallery-toggle-btn');

        // Add a click event listener to the toggle button
        galleryToggleBtn.addEventListener('click', function() {
            // Toggle the 'gallery-expanded' class on the gallery items
            galleryItems.classList.toggle('gallery-expanded');
            // Toggle the 'fade-bottom-side' class on the gallery items
            galleryItems.classList.toggle('fade-bottom-side');

            if (galleryItems.classList.contains('gallery-expanded')) {
                this.textContent = 'Show Less';
            } else {
                this.textContent = 'Show More';
                this.parentElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end' // Aligns to the bottom of the viewport
                });                
            }
        });
        
        // get all the gallery items for each one
        var galleryItem = allGalleryItems.querySelectorAll('.gallery-item');

        // get all the gallery controls for each one
        var galleryControl = allGalleryItems.querySelectorAll('.gallery-control');

        // add event listener to each filter control
        galleryControl.forEach(control => {

            control.addEventListener('click', () => {

                // get the filter type from the control's data-filter attribute
                const filter = control.getAttribute('data-filter');

                // loop through all gallery items and show/hide based on the filter type
                galleryItem.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.classList.remove('d-none');
                        item.classList.add('d-block');

                        // Set data-aos-delay to 0 and re-initiate the AOS animation
                        item.setAttribute('data-aos-delay', '0');
                        item.classList.remove('aos-animate');
                        setTimeout(() => {
                            item.classList.add('aos-animate');
                        }, 10); // Short delay to ensure the class is removed and re-added

                    } else {
                        item.classList.remove('d-block');
                        item.classList.add('d-none');
                    }
                });

                // toggle active class on the control
                galleryControl.forEach(control => {
                    control.classList.remove('active');
                });

                control.classList.add('active');

                setTimeout(() => { 
                    AOS.refresh(); // Refresh AOS after the tab content is displayed 
                }, 100); // Adjust the timeout if necessary to ensure proper timing

            });

        });

    });
}





/*  
  -------------------------------------------------------------------------
  -----      Initializing GLightbox (Responsive Lightbox Gallery)     -----
  -------------------------------------------------------------------------
*/

// Check if GLightbox is defined
if (typeof GLightbox !== 'undefined') {
    // Check if at least one element with class 'glightbox' exists
    var glightboxElement = document.querySelector('.glightbox');
    if (glightboxElement) {
        // If an element exists, initialize GLightbox
        const lightbox = GLightbox();
    }
}





//  ----------------------------------------------------------------------------------------------------
//  -----       Algolia Search configuration. See the documentation for setup instructions!        ----- 
//  ----------------------------------------------------------------------------------------------------

// Select the search button element from the DOM
var searchButton = document.querySelector("#searchButton");

// Check if the search button exists
if (searchButton) {
    // Define the HTML for the search modal
    const searchModal = `
        <!-- Search Modal -->
        <div class="modal fade" id="searchButtonModal" tabindex="-1" aria-labelledby="searchButton" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-scrollable max-w-xl mx-auto pt-7 pt-sm-8 pt-xl-9 px-2">
                <div class="modal-content rounded-4">
                    <div class="modal-header search px-5 py-3">
                        <div>
                            <svg class="text-body-tertiary opacity-75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height="24" width="24"> <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /> </svg>
                        </div>

                        <div class="search-input w-100 ms-4"></div>
                    </div>

                    <div class="modal-body search py-0">
                        <div class="results"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Insert the search modal HTML into the body
    document.body.insertAdjacentHTML('beforeend', searchModal);

    // Flag to track if Algolia libraries are loaded
    let algoliaLoaded = false;

    // Function to dynamically load script at the end of the body
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    }

    // Add click event listener to the search button
    searchButton.addEventListener("click", async function() {
        // Check if Algolia libraries are not loaded
        if (!algoliaLoaded) {
            try {
                // Load algoliasearch library from ./assets/libraries/algolia/
                await loadScript('./assets/libraries/algolia/algoliasearch-lite.umd.js');
                // Load instantsearch library from ./assets/libraries/algolia/
                await loadScript('./assets/libraries/algolia/instantsearch.production.min.js');
                // Set flag to true after successful imports
                algoliaLoaded = true;
            } catch (error) {
                // Log any errors that occur during library loading
                console.error("Error loading Algolia libraries:", error);
                return;
            }
        }

        // Initialize Algolia search client
        const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY);

        // Initialize InstantSearch
        const search = instantsearch({
            indexName: ALGOLIA_INDEX_NAME,
            searchClient,
            searchFunction: function(helper) {
                // Perform search only if the query is not empty
                if (helper.state.query === '') {
                    return;
                }
                helper.search();
            }
        });

        // Add search widgets to the InstantSearch instance
        search.addWidgets([
            instantsearch.widgets.searchBox({
                container: ".search .search-input",
                placeholder: "Find anything...",
                showReset: false,
                showSubmit: false,
                showLoadingIndicator: true
            }),
            instantsearch.widgets.hits({
                container: ".search .results",
                templates: {
                    item: (hit) => {
                        return `
                            <div class="result py-2">
                                <div class="d-flex align-items-center gap-4 p-3 bg-body-secondary-hover rounded-4 position-relative">
                                    <div>
                                        <div class="ratio w-8 h-7">
                                            <img src="${hit.img}" class="object-fit-cover rounded-1 border" alt="image preview" loading="lazy">
                                        </div>
                                    </div>

                                    <div>
                                        <!-- Remove line-clamp-1 if you need more lines -->
                                        <a href="${hit.link}" class="line-clamp-1 m-0 text-decoration-none stretched-link text-body-emphasis text-sm fw-semibold">
                                            ${hit._highlightResult.title.value}
                                        </a>

                                        <!-- Remove line-clamp-1 if you need more lines -->
                                        <p class="line-clamp-1 m-0 mt-1 text-body text-xs">
                                            ${hit._highlightResult.description.value}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        `;
                    },
                    empty: `
                        <div class="py-8 text-center">
                            <div>
                                <svg class="w-5 h-5 text-body-tertiary opacity-75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" /> </svg>
                            </div>

                            <h4 class="m-0 mt-4 text-body-emphasis text-sm fw-semibold">
                                No results found
                            </h4>

                            <p class="m-0 mt-3 text-body text-xs">
                                No pages were found for this search term. Please try again.
                            </p>
                        </div>
                    `
                }
            })
        ]);

        // Start the InstantSearch instance
        search.start();

        // Function to focus on the search input field
        const focusInput = () => {
            setTimeout(() => {
                const searchInput = document.querySelector('.search form input');
                if (searchInput) {
                    searchInput.focus();
                }
            }, 1000); // Adjust delay if necessary
        };

        // Call the function to focus on the search input field
        focusInput();

        // Empty the results div when the modal is hidden
        var searchModalContainer = document.querySelector('#searchButtonModal');
        searchModalContainer.addEventListener('hide.bs.modal', (e) => {
            searchModalContainer.querySelector('.results').textContent = '';
            // Ensure focus is moved out of the modal when it is hidden 
            searchButton.focus();
        });
    });
}
// End of the JavaScript for Algolia's search!


