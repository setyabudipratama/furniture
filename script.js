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
