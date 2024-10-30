const btn = document.querySelector("header button");
btn.addEventListener("click", () => {
    const product = document.getElementById("orange");
    product.scrollIntoView({ behavior: "smooth" });
});

const utama = document.querySelector('.navbar .nav-item:first-child');
utama.addEventListener('click', () => {
    window.location.href = "index.html";
});

// fungsi untuk beralih ke halaman shop orange sofa
const orangeSofa = document.querySelectorAll('#orange .btn');
orangeSofa.forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = "orange.html";
    });
});

// fungsi untuk beralih ke halaman shop brown sofa
const brownSofa = document.querySelectorAll('#brown .btn');
brownSofa.forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = "brown.html";
    });
});

// fungsi untuk beralih ke halaman shop white sofa
const whiteSofa = document.querySelectorAll('#white .btn');
whiteSofa.forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = "white.html";
    });
});


// rubah footer
const footer = document.querySelector('footer');
Object.assign(footer.style, {
    justifyContent: 'space-around',
});

// rubah ukuran h5 footer
const h5Footer = document.querySelector('footer h5');

// rubah ukuran span footer
const spanFooter = document.querySelectorAll('footer span');


// rubah ukuran teks h2
const h2Teks = document.querySelectorAll('section h2');

function applyResponsiveStyles() {
    if (window.innerWidth < 767) {
        h2Teks.forEach(h2 => {
            h2.style.fontSize = '1.3rem';
        });
        Object.assign(footer.style, {
            justifyContent: 'center',
            gap: '0',
        });
        h5Footer.style.fontSize = '0.6rem';
        spanFooter.forEach(span => {
            span.style.fontSize = '0.6rem';
        });
    }
}

// panggil fungsi
applyResponsiveStyles();
window.addEventListener('resize', applyResponsiveStyles);
