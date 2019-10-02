const siteContent = {
  "nav": {
    "nav-item-11": "ContentOne",
    "nav-item-2": "ContentTwo",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);



// Store object values into an array for easy looping
const testMapObject = Object.keys(siteContent.nav);
const navValues = Object.values(siteContent.nav);

// create links to append
const aLink = document.createElement("a");
const aLink2 = document.createElement("a");

let navAnchors = document.querySelectorAll("nav a");


document.querySelector("nav").prepend(aLink);
document.querySelector("nav").prepend(aLink2);

// Loop through our elements.
navAnchors.forEach( (link, i) => {
  link.style.color = "green";
  link.classList.add(testMapObject[i]);
  link.innerText = navValues[i];
});


const ctaH1 = document.querySelector(".cta .cta-text h1");
ctaH1.innerText = siteContent.cta.h1;

const ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.innerText = siteContent.cta.button;

const ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent['cta']["img-src"];

const mainContentH4s = Object.values(siteContent['main-content']);
console.log(mainContentH4s);

const topContentH4 = document.querySelectorAll('.text-content h4');
const topContentP = document.querySelectorAll('.text-content p');
const topContentImg = document.getElementById('middle-img');

topContentH4[0].textContent = siteContent['main-content']['features-h4'];
topContentH4[1].textContent = siteContent['main-content']['about-h4'];
topContentH4[2].textContent = siteContent['main-content']['services-h4'];
topContentH4[3].textContent = siteContent['main-content']['product-h4'];
topContentH4[4].textContent = siteContent['main-content']['vision-h4'];

topContentP[0].textContent = siteContent['main-content']['features-content'];
topContentP[1].textContent = siteContent['main-content']['about-content'];
topContentP[2].textContent = siteContent['main-content']['services-content'];
topContentP[3].textContent = siteContent['main-content']['product-content'];
topContentP[4].textContent = siteContent['main-content']['vision-content'];
topContentImg.src = siteContent["main-content"]['middle-img-src'];

// Contact Section
const contactInfromationTitle = document.querySelector(".contact h4");
contactInfromationTitle.innerText = siteContent["contact"]['contact-h4'];

const contactContentValues = Object.values(siteContent["contact"]);
const newContactContentValues = contactContentValues.shift();

document.querySelectorAll(".contact p").forEach( (paragraphElements,i) => paragraphElements.innerText = contactContentValues[i]);


document.querySelector("footer p").innerText = siteContent['footer']['copyright'];
// topContentH4.forEach( (element, i) => {
//   console.log(i);
//   element.innerText = mainContentH4s[i];
//   topContentP.innerText = mainContentH4s[i];
// })



