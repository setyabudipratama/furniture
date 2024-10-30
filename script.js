// fungsi untuk scroll ke arrivals
const header = document.querySelector('header .fa-circle-down');
header.addEventListener('click', () => {
    const arrivals = document.querySelector('#arrivals');
    arrivals.scrollIntoView({ behavior: 'smooth' });
});

// fungsi untuk scroll ke gallery
const arrivals = document.querySelector('#arrivals .fa-circle-down');
arrivals.addEventListener('click', () => {
    const gallery = document.querySelector('#gallery');
    gallery.scrollIntoView({ behavior: 'smooth' });
});

// fungsi untuk scroll ke atas
const gallery = document.querySelector('#gallery .fa-angles-up');
gallery.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// fungsi untuk ke halaman shop 
const shop = document.querySelector('.navbar .nav-item:nth-child(2)');
shop.addEventListener('click', () => {
    window.location.href="shop.html";
});

// fungsi untuk beralih ke halaman shop
const seeMore = document.querySelectorAll('#arrivals .btn');
seeMore.forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href="shop.html";
    });
});


// rubah posisi button header
const btnHeader = document.querySelector('header .fa-circle-down');

// rubah tinggi viewport arrivals
const viewportArrivals = document.getElementById('arrivals');

// rubah tinggi template arrivals
const sliderArrivals = document.querySelector('#arrivals .slider');

// rubah posisi button arrivals
const btnArrivals = document.querySelector('#arrivals .fa-circle-down');

// rubah ukuran teks h1
const h1Header = document.querySelector('header h1');
const h1Arrivals = document.querySelector('#arrivals h1');
const h1Gallery = document.querySelector('#gallery h1');

// rubah footer
const footer = document.querySelector('footer');
Object.assign(footer.style, {
    justifyContent: 'space-around',
});

// rubah ukuran h5 footer
const h5Footer = document.querySelector('footer h5');

// rubah ukuran span footer
const spanFooter = document.querySelectorAll('footer span');

function applyResponsiveStyles() {
    if (window.innerWidth < 767) {
        Object.assign(btnHeader.style, {
            posision: 'absolute',
            top: '500px',
        });
        viewportArrivals.style.height = '70vh';
        sliderArrivals.style.top = '10%';
        btnArrivals.style.top = '490px';
        h1Header.style.fontSize = '1.3rem';
        h1Arrivals.style.fontSize = '1.3rem';
        h1Gallery.style.fontSize = '1.3rem';
        Object.assign(footer.style, {
            justifyContent: 'center',
            gap: '0',
        });
        h5Footer.style.fontSize = '0.6rem';
        spanFooter.forEach(span => {
            span.style.fontSize = '0.6rem';
        });
    } else if (window.innerWidth >= 767 && window.innerWidth < 1024) {
        Object.assign(btnHeader.style, {
            posision: 'absolute',
            top: '500px',
        })
    }
}

// panggil fungsi
applyResponsiveStyles();
window.addEventListener('resize', applyResponsiveStyles);
