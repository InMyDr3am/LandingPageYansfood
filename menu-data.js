// Data seluruh menu YansFood dengan tambahan properti kategori
const masterMenu = [
    {
        id: "m1",
        nama: "Nasi Chicken Katsu",
        harga: "Rp 20.000",
        kategori: "makanan_berat",
        image: "images/makanan_berat/nasi_chicken_katsu.png",
        deskripsi: "Nasi dan chicken katsu homemade yang dibuat tanpa pengawet. Dilengkapi sayur, saus dan mayones."
    },
    {
        id: "m2",
        nama: "Nasi Chicken Nugget",
        harga: "Rp 17.000",
        kategori: "makanan_berat",
        image: "images/makanan_berat/nasi_nugget.png",
        deskripsi: "Nasi dan 4 pcs chicken nugget yang dibuat tanpa pengawet. Dilengkapi sayur, saus dan mayones."
    },
    {
        id: "m3",
        nama: "Nasi Stick Sosis",
        harga: "Rp 17.000",
        kategori: "makanan_berat",
        image: "images/makanan_berat/nasi_stick_sosis.png",
        deskripsi: "Nasi dan 8 pcs stick sosis homemade yang dibuat tanpa pengawet. Dilengkapi sayur, saus dan mayones."
    },
    {
        id: "m4",
        nama: "Nasi Nugget Stick Sosis",
        harga: "Rp 19.000",
        kategori: "makanan_berat",
        image: "images/makanan_berat/nasi_nugget_stick_sosis.png",
        deskripsi: "Nasi, 4 pcs nugget dan 2 pcs stick sosis homemade yang dibuat tanpa pengawet. Dilengkapi sayur, saus dan mayones."
    },
    {
        id: "m5",
        nama: "Nasi Goreng",
        harga: "Rp 16.000",
        kategori: "makanan_berat",
        image: "images/makanan_berat/nasi_goreng.png",
        deskripsi: "Nasi goreng dengan rasa khas rumahan dilengkapi dengan telur, sayur dan kerupuk."
    },
    {
        id: "m6",
        nama: "Nasi Goreng Cikur",
        harga: "Rp 16.000",
        kategori: "makanan_berat",
        image: "images/makanan_berat/nasi_goreng_cikur.png",
        deskripsi: "Nasi goreng dengan rasa cikur yang dominan dan dilengkapi dengan telur, sayur dan kerupuk."
    },
    {
        id: "m7",
        nama: "Nasi Goreng Jadul",
        harga: "Rp 16.000",
        kategori: "makanan_berat",
        image: "images/makanan_berat/nasi_goreng_jadul.png",
        deskripsi: "Nasi goreng dengan rasa bawang merah dan putih yang dominan dan dilengkapi dengan telur, sayur dan kerupuk."
    },
    {
        id: "m8",
        nama: "Nasi Goreng Chicken Katsu",
        harga: "Rp 23.000",
        kategori: "makanan_berat",
        image: "images/makanan_berat/nasi_goreng_katsu.png",
        deskripsi: "Nasi goreng dengan rasa khas rumahan dilengkapi dengan telur, chicken katsu sayur dan kerupuk."
    },
    {
        id: "m9",
        nama: "Nasi Goreng Mawut",
        harga: "Rp 18.000",
        kategori: "makanan_berat",
        image: "images/makanan_berat/nasi_goreng_mawut.png", 
        deskripsi: "Nasi goreng dengan rasa khas rumahan dilengkapi dengan mie, telur, sayur dan kerupuk."
    },
    {
        id: "m10",
        nama: "Dimsum Ayam (Isi 4)",
        harga: "Rp 15.000",
        kategori: "makanan_ringan",
        image: "images/makanan_ringan/dimsum_ayam.png",
        deskripsi: "Dimsum kukus homemade dengan isian daging ayam. Free chili oil dan mayones"
    },
    {
        id: "m11",
        nama: "Dimsum Udang (Isi 4)",
        harga: "Rp 15.000",
        kategori: "makanan_ringan",
        image: "images/makanan_ringan/dimsum_udang.png",
        deskripsi: "Dimsum kukus homemade dengan isian daging udang. Free chili oil dan mayones."
    },
    {
        id: "m12",
        nama: "Dimsum Ayam Jamur (Isi 4)",
        harga: "Rp 15.000",
        kategori: "makanan_ringan",
        image: "images/makanan_ringan/dimsum_jamur.jpeg",
        deskripsi: "Dimsum kukus homemade dengan isian jamur. Free chili oil dan mayones."
    },
    {
        id: "m13",
        nama: "Dimsum Mix (Isi 4)",
        harga: "Rp 15.000",
        kategori: "makanan_ringan",
        image: "images/makanan_ringan/dimsum_mix.png",
        deskripsi: "Dimsum kukus homemade bisa mix ayam, jamur dan udang. Free chili oil dan mayones."
    },
    {
        id: "m14",
        nama: "Dimsum Mix (Isi 4)",
        harga: "Rp 15.000",
        kategori: "makanan_ringan",
        image: "images/makanan_ringan/dimsum_mix.png",
        deskripsi: "Dimsum kukus homemade bisa mix ayam, jamur dan udang. Free chili oil dan mayones."
    },
    {
        id: "m13",
        nama: "Dimsum Mix (Isi 4)",
        harga: "Rp 15.000",
        kategori: "makanan_ringan",
        image: "images/makanan_ringan/dimsum_mix.png",
        deskripsi: "Dimsum kukus homemade bisa mix ayam, jamur dan udang. Free chili oil dan mayones."
    },
    {
        id: "m13",
        nama: "Dimsum Mix (Isi 4)",
        harga: "Rp 15.000",
        kategori: "makanan_ringan",
        image: "images/makanan_ringan/dimsum_mix.png",
        deskripsi: "Dimsum kukus homemade bisa mix ayam, jamur dan udang. Free chili oil dan mayones."
    },
    {
        id: "m13",
        nama: "Dimsum Mix (Isi 4)",
        harga: "Rp 15.000",
        kategori: "makanan_ringan",
        image: "images/makanan_ringan/dimsum_mix.png",
        deskripsi: "Dimsum kukus homemade bisa mix ayam, jamur dan udang. Free chili oil dan mayones."
    },
    {
        id: "m11",
        nama: "Es Teh Manis",
        harga: "Rp 5.000",
        kategori: "minuman",
        image: "images/minuman/es_teh.png",
        deskripsi: "Es teh manis segar pelepas dahaga yang dibuat dari daun teh pilihan."
    }
];

// Fungsi global untuk menyembunyikan/menampilkan teks deskripsi panjang
function toggleDescription(elementId, button) {
    const textElement = document.getElementById(elementId);
    if (textElement.classList.contains('line-clamp-2')) {
        textElement.classList.remove('line-clamp-2');
        textElement.classList.add('line-clamp-none');
        button.innerText = 'Sembunyikan';
    } else {
        textElement.classList.remove('line-clamp-none');
        textElement.classList.add('line-clamp-2');
        button.innerText = '...selengkapnya';
    }
}

// Fungsi untuk merender HTML Kartu Menu ke dalam Grid (Mendukung Filter Kategori)
function renderAllMenu(containerId, kategoriDipilih = 'semua') {
    const gridContainer = document.getElementById(containerId);
    if (!gridContainer) return;

    // Saring menu berdasarkan kategori yang dipilih
    const menuTerfilter = kategoriDipilih === 'semua' 
        ? masterMenu 
        : masterMenu.filter(menu => menu.kategori === kategoriDipilih);

    // Tampilkan pesan jika menu di kategori tersebut kosong
    if (menuTerfilter.length === 0) {
        gridContainer.innerHTML = `<p class="col-span-full text-center text-slate-500 py-12">Menu belum tersedia untuk kategori ini.</p>`;
        return;
    }

    gridContainer.innerHTML = menuTerfilter.map(menu => `
        <div class="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <img src="${menu.image}" alt="${menu.nama}" class="w-full h-48 object-cover" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80'">
            <div class="p-6 space-y-4">
                <div class="flex justify-between items-start">
                    <h3 class="font-bold text-lg text-slate-900">${menu.nama}</h3>
                    <span class="text-amber-600 font-bold text-base whitespace-nowrap">${menu.harga}</span>
                </div>
                <div>
                    <p id="desc-${menu.id}" class="text-sm text-slate-500 line-clamp-2 transition-all duration-300">
                        ${menu.deskripsi}
                    </p>
                    <button onclick="toggleDescription('desc-${menu.id}', this)" class="text-xs font-semibold text-amber-600 hover:text-amber-700 mt-1 focus:outline-none cursor-pointer">
                        ...selengkapnya
                    </button>
                </div>
                <a href="https://wa.me/6281234567890?text=Saya%20mau%20pesan%20${encodeURIComponent(menu.nama)}" target="_blank" class="block text-center w-full bg-slate-50 hover:bg-amber-600 hover:text-white text-slate-700 text-xs font-bold py-3 rounded-xl transition-all">
                    Pesan via WhatsApp
                </a>
            </div>
        </div>
    `).join('');
}