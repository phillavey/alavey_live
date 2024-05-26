
const BUILDINGS = [
    {
        name: '54 Shore Drive',
        description: 'Ogden Dunes, IN',
        longDescription:
        'The design of the new Christchurch Botanic Gardens Centre is in the spirit of classic garden architecture, strategically sited to complement existing pathways within the garden. As a base for botanic science and research, the building is designed to communicate and educate the visitor in the beauty, variety and complexity of the plant world.\n'
        + 'The brief was complex with the entire long-term wish list for the gardens gathered together into one project. A diversity of uses was identified, which included the shade houses and tractor and fertiliser sheds and the café. Christchurch Botanic Gardens is unusual in that it isn’t a walled garden, instead it’s permeable all the way around, pierced by bridges. The design included new access ways to complete the pathway system and open up a large section of the adjacent riverbank for public access.\n',
        path: 'assets/buildings/54 Shore Drive',
        page: '54 Shore Drive'
    },
    {
        name: '366 St. Andre',
        description: 'A building',
        longDescription:
        'The design of the new Christchurch Botanic Gardens Centre is in the spirit of classic garden architecture, strategically sited to complement existing pathways within the garden. As a base for botanic science and research, the building is designed to communicate and educate the visitor in the beauty, variety and complexity of the plant world.\n'
        + 'The brief was complex with the entire long-term wish list for the gardens gathered together into one project. A diversity of uses was identified, which included the shade houses and tractor and fertiliser sheds and the café. Christchurch Botanic Gardens is unusual in that it isn’t a walled garden, instead it’s permeable all the way around, pierced by bridges. The design included new access ways to complete the pathway system and open up a large section of the adjacent riverbank for public access.\n',
        path: 'assets/buildings/366 St. Andre',
        page: '366 St. Andre'
    },
    {
        name: '4 Lori Lane',
        description: 'A building',
        path: 'assets/buildings/Atieh Residence',
        page: ''
    },
    {
        name: '261 E Terracotta',
        description: 'A building',
        path: 'assets/buildings/Benkert Residence',
        page: ''
    },
    {
        name: '1101 Barkley Road',
        description: 'A building',
        path: 'assets/buildings/Gajewski Residence',
        page: ''
    },
    {
        name: 'Miceli Farms',
        description: 'A building',
        path: 'assets/buildings/Miceli Stable',
        page: 'Miceli Farms'
    },
    {
        name: 'Building F',
        description: 'Location, USA',
        longDescription:
        'The design of the new Christchurch Botanic Gardens Centre is in the spirit of classic garden architecture, strategically sited to complement existing pathways within the garden. As a base for botanic science and research, the building is designed to communicate and educate the visitor in the beauty, variety and complexity of the plant world.\n'
        + 'The brief was complex with the entire long-term wish list for the gardens gathered together into one project. A diversity of uses was identified, which included the shade houses and tractor and fertiliser sheds and the café. Christchurch Botanic Gardens is unusual in that it isn’t a walled garden, instead it’s permeable all the way around, pierced by bridges. The design included new access ways to complete the pathway system and open up a large section of the adjacent riverbank for public access.\n',
        path: 'assets/buildings/River Line',
        page: 'Building F'
    },
    {
        name: '305 Lancaster',
        description: 'A building',
        path: 'assets/buildings/305 Lancaster',
        page: ''
    }
]

const GALLERY_FILE_NAME = '/gallery.jpg';
const GALLERY_MAIN_LIST = [
    '54 Shore Drive',
    'Miceli Farms',
    '261 E Terracotta',
    '4 Lori Lane',
    'Building F',
    '366 St. Andre',
    '1101 Barkley Road'
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

// Navbar scroll handler
if (screen.orientation.type !== 'portrait-primary') {
    const nav = document.querySelector('nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        let scrollYRecent = window.scrollY;
        if (lastScrollY < scrollYRecent) {
            nav.classList.add('nav-hidden');
        } else {
            nav.classList.remove('nav-hidden');
        }
        lastScrollY = scrollYRecent;
    });
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

