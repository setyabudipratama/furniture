const suka = document.querySelector('.fa-heart');
// fungsi untuk like dan unlike
suka.addEventListener('click', () => {
    if(suka.classList.contains('fa-regular')) {
        suka.classList.remove('fa-regular');
        suka.classList.add('fa-solid');
    } else {
        suka.classList.remove('fa-solid');
        suka.classList.add('fa-regular');
    }
});

// fungsi untuk beralih ke halaman shop
const back = document.getElementById('back');
back.addEventListener('click', () => {
    window.location.href = 'shop.html';
});


// rubah background halaman
const body = document.querySelector('body');
Object.assign(body.style, {
    animation: 'none',
    backgroundColor: 'beige',
});

// rubah ukuran container
const containerProduct = document.querySelector('#product .container');
Object.assign(containerProduct.style, {
    height: '480px',
    top: '5%',
    borderRadius: '10px',
})

function applyResponsiveStyles() {
    if (window.innerWidth < 767) {
        back.style.top = '10%';
    }
}

// panggil fungsi
applyResponsiveStyles();
window.addEventListener('resize', applyResponsiveStyles);
