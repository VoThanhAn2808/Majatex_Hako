const translations = {
    en: {
        home_nav: "Home",
        about_nav: "About us",
        product_nav: "Product",
        ourClients_nav: "Our clients",
        contact_nav: "Contact",
        language: "English",
        product_title: "Product",
        product_text: `We offer a diverse selection of premium apparel for children,
      women, and men, designed to meet international standards in both
      style and quality.</br>Our product range includes:`,
        product_st: `<span>Children’s Wear:</span> Soft, safe, and breathable clothing for babies, kids, and teens – designed
      with gentle fabrics that protect delicate skin.`,
        product_nd: `<span>Women’s Wear:</span> Stylish tops, dresses, loungewear, activewear, and more.`,
        product_rd: `<span>Men’s Wear:</span> Versatile everyday essentials, from casual T-shirts to outerwear.`,
        product_th: `<span>Unisex Basics:</span> High-quality wardrobe staples suitable for all.`,
        product_fr: `<span>Custom Orders:</span> OEM & ODM services tailored to your brand’s needs.`
    },
    id: {
        home_nav: "Beranda",
        about_nav: "Tentang Kami",
        product_nav: "Produk",
        ourClients_nav: "Klien Kami",
        contact_nav: "Kontak",
        language: "Bahasa",
        product_title: "Produk",
        product_text: `Kami menawarkan berbagai pilihan pakaian premium untuk anak-anak, wanita, dan pria,
      dirancang untuk memenuhi standar internasional dalam gaya dan kualitas.</br>Rangkaian produk kami mencakup:`,
        product_st: `<span>Pakaian Anak:</span> Pakaian yang lembut, aman, dan bernapas untuk bayi, anak-anak, dan remaja – dibuat dengan kain lembut yang melindungi kulit sensitif.`,
        product_nd: `<span>Pakaian Wanita:</span> Atasan modis, gaun, pakaian santai, pakaian aktif, dan lainnya.`,
        product_rd: `<span>Pakaian Pria:</span> Pakaian pokok harian serbaguna, mulai dari kaus kasual hingga jaket luar.`,
        product_th: `<span>Dasar Uniseks:</span> Pakaian dasar berkualitas tinggi yang cocok untuk semua.`,
        product_fr: `<span>Pesanan Kustom:</span> Layanan OEM & ODM yang disesuaikan dengan kebutuhan merek Anda.`
    },
};

function setLanguage(lang) {
    // Navbar
    document.querySelectorAll('.home_nav').forEach(el => el.textContent = translations[lang].home_nav);
    document.querySelectorAll('.about_nav').forEach(el => el.textContent = translations[lang].about_nav);
    document.querySelectorAll('.product_nav').forEach(el => el.textContent = translations[lang].product_nav);
    document.querySelectorAll('.ourClients_nav').forEach(el => el.textContent = translations[lang].ourClients_nav);
    document.querySelectorAll('.contact_nav').forEach(el => el.textContent = translations[lang].contact_nav);
    document.getElementById('languageDropdown').textContent = translations[lang].language;

    // Product section
    document.getElementById('product_title').textContent = translations[lang].product_title;
    document.getElementById('product_text').innerHTML = translations[lang].product_text;
    document.getElementById('product_st').innerHTML = translations[lang].product_st;
    document.getElementById('product_nd').innerHTML = translations[lang].product_nd;
    document.getElementById('product_rd').innerHTML = translations[lang].product_rd;
    document.getElementById('product_th').innerHTML = translations[lang].product_th;
    document.getElementById('product_fr').innerHTML = translations[lang].product_fr;
}