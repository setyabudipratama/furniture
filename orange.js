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