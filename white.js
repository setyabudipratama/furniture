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


// rubah border radius container
const containerProduct = document.querySelector('#product .container');
Object.assign(containerProduct.style, {
    borderRadius: '10px',
    height: '60%',
})

// rubah posisi button buy
const btnBuy = document.querySelector('#product .container .btn');

function applyResponsiveStyles() {
    if (window.innerWidth < 767) {
        back.style.top = '10%';
        btnBuy.style.top = '50px';
        suka.style.top = '17px';
    }
}

// panggil fungsi
applyResponsiveStyles();
window.addEventListener('resize', applyResponsiveStyles);
