'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('advertisings', [
      {
        // id: 1,
        title: "AirPods",
        description: "Apple firmasing dunyoga mashxur tengi yo'q quloqchillari",
        store_name: "Uzum market",
        start_price: 2500000,
        discount: 20,
        final_price: 2000000,
        promo_code: "HWJ26X7E",
        url: "https://uzum.uz/ru/product/Besprovodnye-naushniki-Air-355687",
        img: 'https://images.uzum.uz/cgn635vhj8j9g69c5g50/original.jpg',
        category_id: 1
      },
      {
        // id: 2,
        title: "Ko'ylak",
        description: "Naqshinkor va o'zgachalikni sevuvchi erkaklar uchun ko'ylaklar. Materiali 100% paxta, ishlab chiqaruvchi O'zbekiston.",
        store_name: "Uzum market",
        start_price: 75000,
        discount: 15,
        final_price: 63750,
        url: "https://uzum.uz/uz/product/Erkaklar-koylagi-gulli-bosma-bilan-259734",
        img: 'https://images.uzum.uz/cfljqbp25kualhm8hq50/original.jpg',
        category_id: 2
      },
      {
        // id: 3,
        title: "Sofiya kungaboqar yog'i",
        description: "Tozalangan va deodorizatsiyalangan kungaboqar yog'i qovurish va pishirish uchun mos. U shaffof, och oltin rangga ega, deyarli ta'msiz va hidsiz va bundan tashqari, u ko'piklanmaydi.",
        store_name: "Uzum market",
        start_price: 14000,
        discount: 0,
        final_price: 14000,
        url: "https://uzum.uz/ru/product/Podsolnechnoe-maslo-Sofia-278740",
        category_id: 3
      },
      {
        // id: 4,
        title: "Erkaklar uchun polo Samo",
        description: "Erkaklar polo ko'ylagi - qulaylik va uslubni uyg'unlashtirgan sport kiyimlarini qidirayotgan erkaklar uchun mukammal tanlovdir.",
        store_name: "Uzum market",
        start_price: 100000,
        discount: 40,
        final_price: 60000,
        url: "https://uzum.uz/uz/product/Erkaklar-uchun-polo-Samo-420792",
        img: "https://images.uzum.uz/cimgacb6edfostiiq3r0/original.jpg",
        category_id: 2
      },
      {
        // id: 5,
        title: "Qizlar uchun Playowo to'plami",
        description: "100% paxtadan tayyorlangan qiz bolalar trikotaj komplekti. Komplekt: kalta yengli futbolka va shorti. Qizlar uchun zamonaviy kostyum.",
        store_name: "Uzum market",
        start_price: 120000,
        discount: 30,
        final_price: 84000,
        url: "https://uzum.uz/uz/product/Qizlar-uchun-Playowo-306940?skuid=499154",
        img: "https://images.uzum.uz/cgfdu1nhj8j9g69aull0/original.jpg",
        category_id: 2
      },
      {
        // id: 6,
        title: " Apple iPhone 14 Pro 128 GB",
        description: `Mahsulot haqida :
        Ekran - 6,1 dyuym (2556x1179) OLED 120 Gts        
        Xotira - O'rnatilgan 128 GB, RAM 6 GB        
        Foto - 3 ta kamera, asosiy 48 MP`,
        store_name: "Uzum market",
        start_price: 17585000,
        discount: 15,
        final_price: 14950000,
        url: "https://uzum.uz/uz/product/Smartfon-Apple-iPhone-574504?skuid=1161990",
        img: "https://images.uzum.uz/ci3jsldenntd8rfbbmkg/original.jpg",
        category_id: 1
      },
      {
        // id: 7,
        title: "Makaron Bottega del Sole Spagetti, 500 g",
        description: "Kepakli bug'doy unidan tayyorlangan spagetti-bu foydali xususiyatlar bilan birlashtirilgan klassik makaron.",
        store_name: "Uzum market",
        start_price: 10000,
        discount: 10,
        final_price: 9000,
        url: "https://uzum.uz/uz/product/Makaron-Bottega-del-Sole-Spagetti-500-152029",
        img: "https://images.uzum.uz/chngdqn5d7kom1tgdeh0/original.jpg",
        category_id: 3
      },
    ], {}); 
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('advertisings', null, {});
  }
};