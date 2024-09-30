const btn = document.querySelector("header button");
btn.addEventListener("click", () => {
    const product = document.getElementById("orange");
    product.scrollIntoView({ behavior: "smooth" });
});

const utama = document.querySelector('.navbar .nav-item:first-child');
utama.addEventListener('click', () => {
    window.location.href = "index.html";
});