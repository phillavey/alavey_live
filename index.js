
const BUILDINGS = [
    {
        name: '54 Shore Drive',
        description: 'Ogden Dunes, IN',
        longDescription: 'There is subtle alchemy between the new vertically clad compositional interventions and the predictable fenestration of the existing horizontally clad house located on Lake Michigan. The original raised ranch, constructed in the 1950’s, was renovated and added to in the 80’s.  It was time for a serious update to fit the lifestyle of its’ owners.'
        + '\nThe program includes a steel and glass arcade acting as a visual and circulatory element unifying the main level living spaces.   The upper level becomes the primary bedroom suite renovated from an existing loft.  Intervening functional spaces including his and hers work from home perches flank and focus views to the lake.',
        path: 'assets/buildings/54 Shore Drive',
        page: '54 Shore Drive'
    },
    {
        name: '366 St. Andre',
        description: 'Valporaiso, IN',
        longDescription: 'More information coming soon...',
        path: 'assets/buildings/366 St. Andre',
        page: '366 St Andre'
    },
    {
        name: '4 Lori Lane',
        description: 'Elgin, IL',
        longDescription: 'More information coming soon...',
        path: 'assets/buildings/Atieh Residence',
        page: '4 Lori Lane'
    },
    {
        name: '261 E Terra Cotta',
        description: 'Crystal Lake, IL',
        longDescription: 'More information coming soon...',
        path: 'assets/buildings/Benkert Residence',
        page: '261 E Terra Cotta'
    },
    {
        name: '1101 Barkley Road',
        description: 'Charlotte, NC',
        longDescription: 'More information coming soon...',
        path: 'assets/buildings/Gajewski Residence',
        page: '1101 Barkley Road'
    },
    {
        name: 'Miceli Farms',
        description: 'Wayne, IL',
        longDescription: 'Located on 4.5 acres adjacent to an equestrian path in the horse-centric community of Wayne, this stable takes its architectural cues from the new residence recently completed on site. Felled trees necessary for the construction of the home and stable will be milled for use as interior cladding within the barn.'
        + '\nThe program includes stalls for four rescue horses, a wash bay, hay lofts, and a feed/tack room that allows for a space to lounge.  Each stall has direct access to a covered paddock leading to the pasture facing the home across a creek bisecting the wooded property.  “Camilla wishes for a new home for River”.  Wish granted!',
        path: 'assets/buildings/Miceli Stable',
        page: 'Miceli Farms'
    },
    // {
    //     name: 'Building F',
    //     description: 'Chicago, IL',
    //     longDescription: 'More information coming soon...',
    //     path: 'assets/buildings/River Line',
    //     page: 'Building F'
    // },
    {
        name: '305 Lancaster',
        description: 'A building',
        longDescription: 'More information coming soon...',
        path: 'assets/buildings/305 Lancaster',
        page: ''
    },
    { // This object is used to create an external link to hidden harbor, so no description included
        name: 'Hidden Harbor',
        description: '',
        longDescription: '',
        path: 'assets/external/hidden harbor',
        page: 'https://www.hiddenharbor.co/'
    }
]

const GALLERY_FILE_NAME = '/gallery.jpg';
const GALLERY_MAIN_LIST = [
    '54 Shore Drive',
    'Miceli Farms',
    '261 E Terra Cotta',
    '4 Lori Lane',
    // 'Building F',
    '366 St. Andre',
    '1101 Barkley Road',
    'Hidden Harbor'
]
/*
54 shore
miceli farms
261 east terracotta (benkert)
4 Lori ln (atieh)
305 Lancaster 
building f
366 st andre
1101 barkley rd (gajewski)

*/

const PHONE = '312-203-9009';
const EMAIL = 'alavey@alaveyarchitecture.com';
const LINKEDIN = 'LinkedIn';
const LINKEDIN_ADDR = 'https://www.linkedin.com/in/adam-lavey-74b5335/';

// Add icon stylesheet
document.querySelector('head').insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">')

// Navbar handler AND hamburger helper
const nav = document.querySelector('nav');
if (screen.orientation.type !== 'portrait-primary') {
    let lastScrollY = window.scrollY;

    // Cleanup if coming from portrait
    nav.classList.remove('nav-hidden');

    nav.insertAdjacentHTML('afterbegin', `
    <a href="./">
        <img class="titleImage" src="assets/logos/aLa Logo B W ALT.png" alt="aLavey Architecture">
    </a>
    <ul>
        <li class="titleTabButton"><a href="projects">Projects</a></li>
        <li class="titleTabButton"><a href="services">Services</a></li>
        <li class="titleTabButton"><a href="about">About</a></li>
        <li class="titleTabButton"><a href="contact">Contact</a></li>
    </ul>
    `)

    window.addEventListener('scroll', () => {
        let scrollYRecent = window.scrollY;
        if (lastScrollY < scrollYRecent) {
            nav.classList.add('nav-hidden');
        } else {
            nav.classList.remove('nav-hidden');
        }
        lastScrollY = scrollYRecent;
    });
} else {
    nav.classList.add('nav-hidden');
    nav.insertAdjacentHTML('afterend', `
    <div class="mobile-nav">
        <div class="mobile-nav-topBar">
            <a href="./">
                <img class="titleImage" src="assets/logos/aLa Logo B W ALT.png" alt="aLavey Architecture">
            </a>
            <a href="javascript:void(0);" class="hamburger-mobile" onclick="toggleMobileNavbar()">
                <i class="fa fa-bars"></i>
            </a>
        </div>
        <div class="mobile-tabButtons-container mobile-nav-hidden">
            <a class="titleTabButton-mobile" href="projects">Projects</a>
            <a class="titleTabButton-mobile" href="services">Services</a>
            <a class="titleTabButton-mobile" href="leadership">Leadership</a>
            <a class="titleTabButton-mobile" href="contact">Contact</a>
        <div>
    </div>
    `)
}

function toggleMobileNavbar() {
    const buttons = document.querySelector('.mobile-tabButtons-container');
    if (buttons.classList.contains('mobile-nav-hidden')) {
        buttons.classList.remove('mobile-nav-hidden');
    } else {
        buttons.classList.add('mobile-nav-hidden');
    }
}

// gallery item generator
function galleryGen(num) {
    let result = [];
    for (let i = 0; i < num; i++) {
        let randNum = Math.floor(Math.random() * BUILDINGS.length);
        result.push(BUILDINGS[randNum].name);
    }
    return result;
}

// appends gallery items to FIRST galleryClass in dom
function populateGallery(galleryItems, galleryClass) {
    let gallery = document.querySelector(galleryClass);
    galleryItems.forEach(e => {
        let path = BUILDINGS.find((o) => {
            return o.name === e;
        }).path;
        let page = BUILDINGS.find((o) => {
            return o.name === e;
        }).page;

        // create gallery item
        let wrapper = document.createElement('div'); // img wrapper
        let link = document.createElement('a');
        let img = document.createElement('img');
        let text = document.createElement('p');
        text.appendChild(document.createTextNode(e));
        link.appendChild(img).className = 'galleryImage expandingImage';
        link.appendChild(text).className = 'galleryItemText';

        // add to gallery
        gallery.appendChild(link).className = 'expandingImageWrapper'; 
        img.src = path + GALLERY_FILE_NAME;
        link.href = page;
    });
}

try {
    let galleryListRandom = galleryGen(1); // random gallery
    populateGallery(GALLERY_MAIN_LIST, '.imageGallery');
    // populateGallery(galleryListRandom, '.imageGallery');
} catch (e) {}
try {
    // populateGallery(galleryGen(100), '.imageGalleryBig');
} catch (e) {}

// scroll intersection observer for fadein
const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
        } else {
            e.target.classList.remove('visible');
        }
    });
});

// set intersection observer as a listener
const scrollElements = document.querySelectorAll('.scrollFadeIn');
scrollElements.forEach((elem) => {
    observer.observe(elem);
});

// populate footer
const footer = document.querySelectorAll('.footer');
footer.forEach((foot) => {
    let phone = document.createElement('div');
    let mail = document.createElement('div');
    let linkedin = document.createElement('a');
    linkedin.href = LINKEDIN_ADDR;
    phone.appendChild(document.createTextNode(PHONE));
    mail.appendChild(document.createTextNode(EMAIL));
    linkedin.appendChild(document.createTextNode(LINKEDIN));

    foot.appendChild(phone);
    foot.appendChild(mail);
    foot.appendChild(linkedin);
});

// called from html to setup page dynamically
function setUp(property) {
    setHeroUrl(property);
    setText(property);
}

// sets hero url
function setHeroUrl(property) {
    document.getElementById('hero').style.backgroundImage = `url(assets/buildings/${property}/gallery.jpg)`;
    // console.log(bgimg);
    console.log(`url(assets/buildings/${property}/gallery.jpg)`);
}

// set project page description text
function setText(property) {
    // titles
    console.log(property)
    let name = BUILDINGS.find((o) => {
        return o.name === property;
    }).name;
    let subName = BUILDINGS.find((o) => {
        return o.name === property;
    }).description;
    document.getElementById('projectName').appendChild(document.createTextNode(name));
    document.getElementById('projectSubName').appendChild(document.createTextNode(subName));

    // description
    let description = BUILDINGS.find((o) => {
        return o.name === property;
    }).longDescription
    let ps = description.split('\n');
    ps.forEach((p) => {
        let ptag = document.createElement('p');
        ptag.appendChild(document.createTextNode(p));
        document.getElementById('description').appendChild(ptag);
    });
    // document.getElementById('description').appendChild(document.createTextNode(description));
}

