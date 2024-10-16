const resources = {
    en: {
        products: "Products",
        bills: "Bills",
        settings: "Settings",
    },
    id: {
        products: "Produk",
        bills: "Tagihan",
        settings: "Pengaturan"
    },
};

const language = (lng) => resources[lng] || resources.en;

export default language; 