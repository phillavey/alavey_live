
const BUILDINGS = [
    {
        name: '54 Shore Drive',
        description: '54 Shore drive is a building!',
        path: './assets/buildings/54 Shore Drive'
    },
    {
        name: '366 St. Andre',
        description: 'A building',
        path: './assets/buildings/366 St. Andre'
    },
    {
        name: 'Atieh Residence',
        description: 'A building',
        path: './assets/buildings/Atieh Residence'
    },
    {
        name: 'Benkert Residence',
        description: 'A building',
        path: './assets/buildings/Benkert Residence'
    },
    {
        name: 'Gajewski Residence',
        description: 'A building',
        path: './assets/buildings/Gajewski Residence'
    },
    {
        name: 'Miceli Stable',
        description: 'A building',
        path: './assets/buildings/Miceli Stable'
    },
    {
        name: 'River Line',
        description: 'A building',
        path: './assets/buildings/River Line'
    }
]
const GALLERY_FILE_NAME = '/gallery.jpg';
const GALLERY_MAIN_LIST = [
    '54 Shore Drive',
    '366 St. Andre',
    'Atieh Residence',
    'Benkert Residence',
    'Gajewski Residence',
    'Miceli Stable',
    'River Line'
]

// Navbar scroll handler
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

// gallery item generator
function galleryGen(num) {
    let result = [];
    for (let i = 0; i < num; i++) {
        let randNum = Math.floor(Math.random() * BUILDINGS.length);
        result.push(BUILDINGS[randNum].name);
    }
    return result;
}

// appends gallery items to imageGallery in dom
function populateGallery(galleryItems) {
    let gallery = document.querySelector('.imageGallery');
    galleryItems.forEach(e => {
        let path = BUILDINGS.find((o) => {
            return o.name === e
        }).path;
        let item = document.createElement('img');
        gallery.appendChild(item).className = 'galleryImage expandingImage';
        item.src = path + GALLERY_FILE_NAME;
        console.log(item);
        console.log(e);
    });
}

// let buildingsList = buildings.map((b) => {
//     return b['name'];
// })
// console.log(buildingsList);

let galleryListRandom = galleryGen(100);

populateGallery(GALLERY_MAIN_LIST);
populateGallery(galleryListRandom);