const translations = {
    en: {
        home_nav: "Home",
        about_nav: "About us",
        product_nav: "Product",
        ourClients_nav: "Our clients",
        contact_nav: "Contact",
        language: "English",
        overview_title: "Company Overview",
        overview_text: `Established in 1990, Majatex Hako Prima has evolved into a
        prominent name in the garment manufacturing industry, specializing
        in high-quality cotton and cotton-bamboo apparel. We focus on
        crafting premium garments tailored for the export market, catering
        to the exacting standards of international clients. Renowned for
        our durable, breathable, and luxuriously soft cotton garments, we
        have successfully expanded our footprint beyond Indonesia,
        exporting to key markets including the USA, Dubai, Singapore,
        Thailand, and Hong Kong. Our sustained growth is fueled by an
        unwavering commitment to quality, continuous innovation, and
        exceptional customer satisfaction.`,
        ourclients_title: "Our Clients",
        ourclients_title_1: "Our Mission",
        ourclients_text_1: "Empower our staff to deliver a premium fashion manufacturing experience that is both trendy and grounded in sustainable practices and leading technologies to maximize customer satisfaction and shareholder value.",
        ourclients_title_2: "Our Values",
        ourclients_text_2: "Human dignity balanced with successful business for our customers and stakeholders.",
        ourclients_title_3: "Our Vision",
        ourclients_text_3: "We are driven by our knowledgeable, strong, and confident staff to be the global leader in fashion supply chain management, integrated with cutting-edge AI and sustainable practices.",
        machinery_title: "Machinery & Technology",
        machinery_text: "At Majatex Hako Prima, we use cutting-edge sewing machines to ensure precision, speed, and consistency in every garment. Operated by skilled professionals and supported by strict quality control, our technology guarantees international-standard results from the first cut to the final stitch.",
    },
    id: {
        home_nav: "Beranda",
        about_nav: "Tentang Kami",
        product_nav: "Produk",
        ourClients_nav: "Klien Kami",
        contact_nav: "Kontak",
        language: "Bahasa",
        overview_title: "Profil Perusahaan",
        overview_text: `Didirikan pada tahun 1990, Majatex Hako Prima telah berkembang menjadi salah satu nama terkemuka dalam industri manufaktur pakaian, dengan spesialisasi pada produk pakaian berkualitas tinggi dari bahan katun dan katun-bambu. Kami berfokus pada pembuatan pakaian premium yang dirancang untuk pasar ekspor dan pasar domestik, dengan standar tinggi sesuai dengan kebutuhan klien internasional dan nasional.
                     Dikenal akan produk katun yang tahan lama, nyaman, dan sangat lembut, kami telah berhasil memperluas jangkauan pasar kami ke luar Indonesia, termasuk Amerika Serikat, Dubai, Singapura, Thailand, Hong Kong, dan lainnya. Pertumbuhan kami yang berkelanjutan didorong oleh komitmen yang kuat terhadap kualitas, inovasi tanpa henti, dan kepuasan pelanggan yang luar biasa.`,
        ourclients_title: "Klien Kami",
        ourclients_title_1: "Misi Kami",
        ourclients_text_1: "Memberdayakan staf kami untuk memberikan pengalaman manufaktur fesyen premium yang trendi namun tetap berlandaskan pada praktik berkelanjutan dan teknologi terdepan, demi memaksimalkan kepuasan pelanggan dan nilai bagi para pemegang saham..",
        ourclients_title_2: "Nilai-Nilai Kami",
        ourclients_text_2: "Martabat manusia yang seimbang dengan keberhasilan bisnis bagi pelanggan dan pemangku kepentingan kami.",
        ourclients_title_3: "Visi Kami",
        ourclients_text_3: "Kami didorong oleh staf kami yang berpengetahuan luas, tangguh, dan percaya diri untuk menjadi pemimpin global dalam manajemen rantai pasok fesyen, yang terintegrasi dengan kecerdasan buatan mutakhir dan praktik berkelanjutan.",
        machinery_title: "Mesin dan Teknologi",
        machinery_text:"Di Majatex Hako Prima, kami menggunakan mesin jahit berteknologi canggih untuk memastikan presisi, kecepatan, dan konsistensi dalam setiap pakaian. Dioperasikan oleh tenaga profesional berpengalaman dan didukung oleh pengendalian kualitas yang ketat, teknologi kami menjamin hasil berstandar internasional mulai dari potongan pertama hingga jahitan terakhir.",
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
    
    document.getElementById('overview_title').textContent = translations[lang].overview_title;
    document.getElementById('overview_text').textContent = translations[lang].overview_text;

    document.getElementById('ourclients_title').textContent = translations[lang].ourclients_title;

    document.getElementById('ourclients_title_1').textContent = translations[lang].ourclients_title_1;
    document.getElementById('ourclients_text_1').textContent = translations[lang].ourclients_text_1;

    document.getElementById('ourclients_title_1').textContent = translations[lang].ourclients_title_1;
    document.getElementById('ourclients_text_2').textContent = translations[lang].ourclients_text_2;

    document.getElementById('ourclients_title_3').textContent = translations[lang].ourclients_title_3;
    document.getElementById('ourclients_text_3').textContent = translations[lang].ourclients_text_3;

    document.getElementById('machinery_title').textContent = translations[lang].machinery_title;
    document.getElementById('machinery_text').textContent = translations[lang].machinery_text;
}