const resources = {
    en: {
        products: "Products",
        bills: "Bills",
        settings: "Settings",
        language: "Language",
        save_changes: "Save Changes",
        error_save_settings: "Failed to update settings!",
        line_time: "Line time",
        local_time: "Local time",
    },
    id: {
        products: "Produk",
        bills: "Tagihan",
        settings: "Pengaturan",
        language: "Bahasa",
        save_changes: "Simpan perubahan",
        error_save_settings: "Gagal memperbarui pengaturan!",
        line_time: "Waktu operasional",
        local_time: "Waktu setempat",
    },
};

const language = (lng) => resources[lng] || resources.en;

export default language; 