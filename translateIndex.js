const translations = {
    en: {
        home_nav: "Home",
        about_nav: "About us",
        product_nav: "Product",
        ourClients_nav: "Our clients",
        contact_nav: "Contact",
        language: "English",
        // About Us   
        about_title: "About Us",
        about_paragraph:
            "MAJATEX HAKO PRIMA has been Indonesia's leading clothing manufacturer and a reliable garment export house since 1990. We produce a wide range of ready-to-wear garments using 100% cotton and cotton bamboo fabrics with Oeko-Tex Standard 100.",
        about_btn: "Read More...",
        // Animation
        experience_text: `<span class="highlight counter" id="city-count">30</span>+Years<br />Industry Experience`,
        production_text: `<span class="highlight counter" id="customer-count">100,000</span>+ Monthly Garment<br />Production Capacity.`,
        yearly_text: `<span class="highlight counter" id="transaction-count">1,000,000</span>+ Garments<br />Produced in a Year.`,
        // Product
        product_title: "Product",
        product_btn: "See more",
        // Advantage
        advantage_title: "Company Advantage",
        advantage_subtitle: "Majatex Hako Prima is proud to be a trusted manufacturing partner for leading fashion brands in some of the world's most dynamic and demanding markets, including the USA, Singapore, Dubai, Hong Kong, Thailand, and beyond.",
        advantage_1_title: "Over 30 Years of experience",
        advantage_1_desc: "Founded in 1990, we bring deep industry insight and a strong commitment to quality and continuous innovation.",
        advantage_2_title: "One-Stop Service",
        advantage_2_desc: "From design, material sourcing, production to packaging - our fully integrated process ensures efficiency and cost-effectiveness for our clients.",
        advantage_3_title: "Professional technical team",
        advantage_3_desc: "Equipped with over 10 advanced production lines, we have the capacity to fulfill large-volume orders with precision and competitive pricing.",
        advantage_4_title: "Inspection",
        advantage_4_desc: "Every product undergoes a thorough quality inspection before shipment to ensure it meets international standards and exceeds customer expectations.",
        // Service
        services_title: "What Services We Offer?",
        // Our Partners
        partners_title: "Our Partners",
        partners_p1: `As a reputable leading clothing manufacturer, we take pride in being
      a trusted production partner for clients around the globe. We have
      collaborated on large-scale garment production with world-renowned
      high-end fashion brands, best-selling retail fashion chains, local
      fashion brands in various countries, OEM/ODM/custom clothing
      companies, as well as numerous design studios, buying offices, and
      apparel traders.`,
        partners_p2: `Our diverse global partner network is a testament to our flexibility
      in production, consistent quality, and ability to swiftly meet the
      evolving demands of the fashion industry.`,

    },
    id: {
        home_nav: "Beranda",
        about_nav: "Tentang Kami",
        product_nav: "Produk",
        ourClients_nav: "Klien Kami",
        contact_nav: "Kontak",
        language: "Bahasa",
        // About Us   
        about_title: "Tentang Kami",
        about_paragraph:
            "MAJATEX HAKO PRIMA telah menjadi salah satu produsen pakaian terkemuka di Indonesia dan mitra ekspor pakaian terpercaya sejak tahun 1990. Kami memproduksi berbagai jenis pakaian siap pakai dengan menggunakan kain katun 100% dan katun bambu yang telah bersertifikat Oeko-Tex Standard 100.",
        about_btn: "Selengkapnya...",
        // Animation 
        experience_text: `<span class="highlight counter" id="city-count">30</span>+Tahun<br />Pengalaman Industri`,
        production_text: `<span class="highlight counter" id="customer-count">100,000</span>+ Kapasitas Produksi<br />Garmen Per Bulan.`,
        yearly_text: `<span class="highlight counter" id="transaction-count">1,000,000</span>+ Garmen<br />Diproduksi per Tahun.`,
        // Product
        product_title: "Produk",
        product_btn: "Lihat lebih banyak",
        // Advantage
        advantage_title: "Keunggulan Perusahaan",
        advantage_subtitle: "Majatex Hako Prima bangga menjadi mitra manufaktur terpercaya bagi merek-merek fesyen ternama di berbagai pasar dunia yang dinamis dan menuntut kualitas terbaik, termasuk Amerika Serikat, Singapura, Dubai, Hong Kong, Thailand, dan lainnya.",
        advantage_1_title: "Lebih dari 30 Tahun Pengalaman",
        advantage_1_desc: "Didirikan pada tahun 1990, kami membawa wawasan industri yang mendalam serta komitmen kuat terhadap kualitas dan inovasi berkelanjutan.",
        advantage_2_title: "Layanan Satu Pintu (One-Stop Service)",
        advantage_2_desc: "Mulai dari desain, pemilihan bahan, produksi hingga pengemasan – proses kami yang terintegrasi sepenuhnya menjamin efisiensi dan efektivitas biaya bagi klien kami.",
        advantage_3_title: "Tim Teknis Profesional",
        advantage_3_desc: "Dengan lebih dari 10 lini produksi canggih, kami mampu menangani pesanan dalam jumlah besar dengan presisi dan harga yang kompetitif.",
        advantage_4_title: "Pemeriksaan Kualitas",
        advantage_4_desc: "Setiap produk menjalani pemeriksaan kualitas menyeluruh sebelum dikirimkan untuk memastikan standar internasional terpenuhi dan melebihi harapan pelanggan.",
        // Service
        services_title: "Layanan Apa yang Kami Tawarkan?",
        // Our Partners
        partners_title: "Mitra Kami",
        partners_p1: `Sebagai salah satu produsen pakaian terkemuka yang memiliki reputasi baik, kami bangga menjadi mitra produksi terpercaya bagi klien di seluruh dunia. Kami telah bekerja sama dalam proyek produksi pakaian skala besar dengan merek fesyen terkenal dunia, jaringan ritel fesyen terlaris, merek fesyen lokal di berbagai negara, perusahaan OEM/ODM/pakaian kustom, serta berbagai studio desain, kantor pembelian, dan pedagang pakaian.`,
        partners_p2: `Jaringan mitra global kami yang beragam mencerminkan fleksibilitas kami dalam produksi, kualitas yang konsisten, dan kemampuan untuk merespons dengan cepat terhadap perubahan kebutuhan industri fesyen.`
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

    // About Us section
    document.getElementById('about-title').textContent = translations[lang].about_title;
    document.getElementById('about-paragraph').textContent = translations[lang].about_paragraph;
    document.getElementById('about-btn').textContent = translations[lang].about_btn;

    // Animation texts
    document.getElementById('experience-text').innerHTML = translations[lang].experience_text;
    document.getElementById('production-text').innerHTML = translations[lang].production_text;
    document.getElementById('yearly-text').innerHTML = translations[lang].yearly_text;

    // Product
    document.getElementById("product-title").textContent = translations[lang].product_title;
    document.getElementById("product-btn").firstChild.textContent = translations[lang].product_btn + " ";

    // Advantage
    document.getElementById("advantage-title").textContent = translations[lang].advantage_title;
    document.getElementById("advantage-subtitle").textContent = translations[lang].advantage_subtitle;

    document.getElementById("advantage-1-title").textContent = translations[lang].advantage_1_title;
    document.getElementById("advantage-1-desc").textContent = translations[lang].advantage_1_desc;

    document.getElementById("advantage-2-title").textContent = translations[lang].advantage_2_title;
    document.getElementById("advantage-2-desc").textContent = translations[lang].advantage_2_desc;

    document.getElementById("advantage-3-title").textContent = translations[lang].advantage_3_title;
    document.getElementById("advantage-3-desc").textContent = translations[lang].advantage_3_desc;

    document.getElementById("advantage-4-title").textContent = translations[lang].advantage_4_title;
    document.getElementById("advantage-4-desc").textContent = translations[lang].advantage_4_desc;

    // Service
    document.getElementById("services-title").textContent = translations[lang].services_title;

    // Our Partners
    document.getElementById("partners-title").textContent = translations[lang].partners_title;
    document.getElementById("partners-paragraph-1").textContent = translations[lang].partners_p1;
    document.getElementById("partners-paragraph-2").textContent = translations[lang].partners_p2;
}