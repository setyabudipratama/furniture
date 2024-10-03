const btn = document.querySelector("header button");
btn.addEventListener("click", () => {
    const product = document.getElementById("orange");
    product.scrollIntoView({ behavior: "smooth" });
});

// fungsi untuk beralih ke halaman utama
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
