import type { Food } from "../types";

// Placeholder images — swap the `image` field for real photos later.
const img = (label: string, tone: "brick" | "turmeric" | "leaf" = "brick") => {
  const colors = { brick: "1B2E22", turmeric: "24402F", leaf: "141414" };
  return `https://placehold.co/600x450/${colors[tone]}/E0A93A?font=roboto&text=${encodeURIComponent(label)}`;
};

export const foods: Food[] = [
  {
    id: "fish-amok",
    name: "Fish Amok",
    khmerName: "អាម៉ុកត្រី",
    category: "Main Dish",
    price: 4.5,
    description:
      "Steamed fish curry in banana leaf with kroeung paste and coconut milk — Cambodia's national dish.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Fish%20Amok%20with%20Rice.jpg?width=600",
    defaultSpicy: "Medium",
    popular: true,
  },
  {
    id: "nom-banh-chok",
    name: "Nom Banh Chok",
    khmerName: "នំបញ្ចុក",
    category: "Noodles",
    price: 3.0,
    description:
      "Rice noodles topped with green fish-based kroeung gravy and fresh garden vegetables.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Num%20Banh%20Chok.jpg?width=600",
    defaultSpicy: "Mild",
    popular: true,
  },
  {
    id: "bai-sach-chrouk",
    name: "Bai Sach Chrouk",
    khmerName: "បាយសាច់ជ្រូក",
    category: "Main Dish",
    price: 3.5,
    description:
      "Grilled pork over broken rice, served with pickled vegetables and a light chicken broth.",
    image:
      "https://asianinspirations.com.au/wp-content/uploads/2023/07/BSC-7.jpg",
    defaultSpicy: "None",
    popular: true,
  },
  {
    id: "kuy-teav",
    name: "Kuy Teav",
    khmerName: "គុយទាវ",
    category: "Soup",
    price: 3.0,
    description:
      "Clear pork-bone broth noodle soup with minced pork, herbs and fried shallots.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kuyteav.jpg?width=600",
    defaultSpicy: "Mild",
    popular: true,
  },
  {
    id: "samlor-machu-kroeung",
    name: "Samlor Machu Kroeung",
    khmerName: "សម្លម្ជូគ្រឿង",
    category: "Soup",
    price: 4.0,
    description:
      "Tangy herbal soup with beef, lemongrass, galangal and turmeric.",
    image: "https://vietasiatravel.com/uploads//Cambodia/cam-suisine.jpg",
    defaultSpicy: "Medium",
  },
  {
    id: "samlor-kor-ko",
    name: "Samlor Kor Ko",
    khmerName: "សម្លកកូរ",
    category: "Soup",
    price: 3.5,
    description:
      "Cambodia's oldest soup — mixed vegetables, green jackfruit and pork in a roasted-rice broth.",
    image:
      " https://media-cdn.tripadvisor.com/media/photo-s/18/a4/36/da/samlor-korko-pork-and.jpg",
    defaultSpicy: "Mild",
  },
  {
    id: "lort-cha",
    name: "Lort Cha",
    khmerName: "លតឆា",
    category: "Noodles",
    price: 3.5,
    description:
      "Short stir-fried rice noodles with pork, egg, bean sprouts and chives.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNs1AoKI-HCmu-rIkOK1-koSKr1hS5QF1HmE-h67ZeE6FeyjWAMQwfUp4&s=10",
    defaultSpicy: "Mild",
  },
  {
    id: "kari-sach-moan",
    name: "Khmer Chicken Curry",
    khmerName: "ការីសាច់មាន់",
    category: "Main Dish",
    price: 4.5,
    description:
      "Yellow curry with chicken, sweet potato and coconut milk, eaten with fresh baguette.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXNsokxKF7w4-nH3dQYAwKp_WRvojlIfDdX_CabB0xgttpFL_int9B5eU&s=10",
    defaultSpicy: "Medium",
    popular: true,
  },
  {
    id: "trey-chien-chou-metrey",
    name: "Sweet & Sour Fish",
    khmerName: "ត្រីចៀនជូរអែម",
    category: "Main Dish",
    price: 5.0,
    description:
      "Whole fried fish glazed in a tamarind sweet-and-sour sauce with vegetables.",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/1b/1d/7d/21/caption.jpg",
    defaultSpicy: "None",
  },
  {
    id: "ang-trey-meuk",
    name: "Grilled Squid",
    khmerName: "អាំងត្រីមឹក",
    category: "Grilled",
    price: 4.0,
    description:
      "Charcoal-grilled squid basted in garlic and lime, served with Kampot pepper sauce.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjLLCzC78EBREoYhHlPtFjtovFTKZcir4ElbiLx9jJM3EPqlvVWAOkjs&s=10",
    defaultSpicy: "Mild",
  },
  {
    id: "kdam-chaa",
    name: "Kampot Pepper Crab",
    khmerName: "ក្តាមឆាម្រេចខ្ចី",
    category: "Main Dish",
    price: 7.5,
    description: "Wok-fried crab tossed with fresh green Kampot peppercorns.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kampot%20pepper%20crab.jpg?width=600",
    defaultSpicy: "Mild",
    popular: true,
  },
  {
    id: "bok-lhong",
    name: "Bok L'hong",
    khmerName: "បុកល្ហុង",
    category: "Salad",
    price: 2.75,
    description:
      "Pounded green papaya salad with chili, lime, dried shrimp and peanuts.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Khmer-style%20green%20papaya%20salad.jpg?width=600",
    defaultSpicy: "Hot",
    popular: true,
  },
  {
    id: "nhoam-sach-ko",
    name: "Beef Salad",
    khmerName: "ញាំសាច់គោ",
    category: "Salad",
    price: 3.5,
    description:
      "Seared beef salad with lime dressing, mint, and roasted rice powder.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMFr0bI4sBO9S6z7li3eZ71EMXZLdsVHMk_AGGXMaeBK6mq-uRpyu11g&s=10",
    defaultSpicy: "Medium",
  },
  {
    id: "cha-houy-teuk",
    name: "Cha Houy Teuk",
    khmerName: "ឆាហួយទឹក",
    category: "Dessert",
    price: 1.75,
    description:
      "Layered grass-jelly dessert with coconut milk and palm sugar syrup over ice.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLp-n1LVGCFJ8IdgnFzDrn4IAFYtbvS4RU7Amfcgx7BeVO1AnuyfiNzA&s=10",
    defaultSpicy: "None",
  },
  {
    id: "num-ansom-chek",
    name: "Banana Sticky Rice",
    khmerName: "នំអន្សមចេក",
    category: "Dessert",
    price: 1.5,
    description: "Sticky rice and banana steamed in banana leaf.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGexGCggQNE_Q12NqJZDJdYz0JbquOfr9yydaTrAC5lQvERkrnYX_hCxE&s=10",
    defaultSpicy: "None",
  },
  {
    id: "num-kom",
    name: "Num Kom",
    khmerName: "នំគម",
    category: "Dessert",
    price: 1.25,
    description:
      "Pyramid-shaped steamed rice dumpling filled with sweet coconut and palm sugar.",
    image:
      "https://flavourfullygood.com/wp-content/uploads/2022/05/Cooked-Num-Kom-1-Flavourfully-Good.jpg",
    defaultSpicy: "None",
  },
  {
    id: "sankhya-lapov",
    name: "Pumpkin Custard",
    khmerName: "សង់ខ្យាល្ពៅ",
    category: "Dessert",
    price: 2.0,
    description: "Steamed egg custard baked inside a whole pumpkin.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJWNcrcFI80Hi_xiYPAVxn8glgvK4VX9SasqPaKV1RK1GmRHm7Xn4RdA8l&s=10",
    defaultSpicy: "None",
  },
  {
    id: "cha-kroeung-sach-chrouk",
    name: "Lemongrass Pork Stir-fry",
    khmerName: "ឆាគ្រឿងសាច់ជ្រូក",
    category: "Main Dish",
    price: 4.0,
    description:
      "Pork stir-fried with kroeung paste — lemongrass, galangal, turmeric and kaffir lime.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvpZ2ed5kMNwATz21OWFBJGt9IWv9fkcxJdH6twH8o4tGKwuXWtTrJhNde&s=10",
    defaultSpicy: "Medium",
  },
  {
    id: "prahok-ktis",
    name: "Prahok Ktis",
    khmerName: "ប្រហុកខ្ទិះ",
    category: "Main Dish",
    price: 3.75,
    description:
      "Minced pork and fermented fish paste dip in coconut cream, served with vegetables.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Prahok%20ktis.jpg?width=600",
    defaultSpicy: "Mild",
  },
  {
    id: "trey-aing",
    name: "Grilled Fish",
    khmerName: "ត្រីអាំង",
    category: "Grilled",
    price: 4.5,
    description:
      "Whole freshwater fish grilled over charcoal, served with a tangy dipping sauce.",
    image:
      " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnY2V3kvpsLc4AurpYekdnmie39xitCsVnZDSXoeme4HYebdOXl-zx9s&s=10",
    defaultSpicy: "None",
    popular: true,
  },
  {
    id: "sach-ko-ang",
    name: "Grilled Beef",
    khmerName: "សាច់គោអាំង",
    category: "Grilled",
    price: 5.0,
    description:
      "Marinated beef skewers grilled and served with a green peppercorn dipping sauce.",
    image: "https://images.deliveryhero.io/image/fd-kh/LH/u01e-hero.jpg",
    defaultSpicy: "Mild",
  },
  {
    id: "mee-kola",
    name: "Mee Kola",
    khmerName: "មីកូឡា",
    category: "Noodles",
    price: 3.25,
    description:
      "Dry-tossed noodle salad with vegetables, herbs and a tamarind dressing.",
    image:
      "https://images.deliveryhero.io/image/fd-kh/products/719991.jpg?width=577.5&height=577.5",
    defaultSpicy: "Mild",
  },
  {
    id: "samlor-prohok",
    name: "Samlor Prohok",
    khmerName: "សម្លប្រហុក",
    category: "Soup",
    price: 3.75,
    description: "Rich fermented-fish soup with pork, eggplant and long beans.",
    image:
      "https://camdelicious.wordpress.com/wp-content/uploads/2015/05/img_1006.jpg",
    defaultSpicy: "Medium",
  },
  {
    id: "bobor-khmer",
    name: "Bobor Khmer",
    khmerName: "បបរខ្មែរ",
    category: "Soup",
    price: 2.25,
    description:
      "Comforting rice porridge with chicken, ginger and crispy shallots.",
    image:
      "https://images.deliveryhero.io/image/global-menu-service/FP_KH/vendor/zhgn/product/7c21db93-3204-4de3-9e65-075e7ca97ff2.jpg?width=393.75&height=393.75",
    defaultSpicy: "None",
  },
  {
    id: "nom-plae-ai",
    name: "Nom Plae Ai",
    khmerName: "នំប្លែអាយ",
    category: "Dessert",
    price: 1.5,
    description: "Palm-sugar filled rice balls rolled in fresh grated coconut.",
    image:
      "https://kohsantepheap.tv/wp-content/uploads/2020/07/100968975_1160072887665549_4394437527394582528_n.jpg",
    defaultSpicy: "None",
  },
  {
    id: "cha-trakuon",
    name: "Stir-fried Morning Glory",
    khmerName: "ឆាត្រកួន",
    category: "Main Dish",
    price: 2.75,
    description:
      "Water spinach stir-fried with garlic, chili and fermented soybean paste.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Ipomoea%20aquatica%20cooked.jpg?width=600",
    defaultSpicy: "Mild",
  },
  {
    id: "ang-sach-chrouk",
    name: "Grilled Pork Skewers",
    khmerName: "អាំងសាច់ជ្រូក",
    category: "Grilled",
    price: 3.5,
    description:
      "Charcoal pork skewers marinated in coconut milk and turmeric.",
    image:
      " https://kitchenconfidante.com/wp-content/uploads/2020/07/Grilled-Pork-Skewers-kitchenconfidante.com-8654-FEATURED-IMAGE.jpg",
    defaultSpicy: "Mild",
    popular: true,
  },
  {
    id: "sach-moan-cha-knyei",
    name: "Ginger Chicken Stir-fry",
    khmerName: "សាច់មាន់ឆាខ្ញី",
    category: "Main Dish",
    price: 4.0,
    description:
      "Chicken stir-fried with fresh ginger, wood-ear mushroom and spring onion.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRir5u5ayfGnXRZSulj0_Xiouu3DcPZkY0j1PIVCO4fAdl0plrvgyqsqL&s=10",
    defaultSpicy: "Mild",
  },
  {
    id: "trey-jou-guern",
    name: "Fish in Turmeric Broth",
    khmerName: "ត្រីជូរគ្រឿង",
    category: "Main Dish",
    price: 5.0,
    description:
      "Simmered fish in a tangy turmeric and lemongrass broth with vegetables.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSKeWZt4fAvX-vX2TpWgd6PHznu1qamUqeCxIHjcyfPtJBeNMLg24kgU8&s=10",
    defaultSpicy: "Medium",
  },
  {
    id: "mee-cha",
    name: "Mee Cha",
    khmerName: "មីឆា",
    category: "Noodles",
    price: 3.25,
    description: "Stir-fried egg noodles with pork, egg and mixed vegetables.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCtGpV-BU1SvtfdJ69TyoDrKDIWJhrssx23aTz4noQw4BysEhg5JxeUN9d&s=10",
    defaultSpicy: "Mild",
  },
  {
    id: "tuk-ampov",
    name: "Sugarcane Juice",
    khmerName: "ទឹកអំពៅ",
    category: "Drink",
    price: 1.5,
    description:
      "Freshly pressed sugarcane juice over ice with a splash of lime.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9a9e9KjbzdW9yqqLus9ksRvGqdvC200u62L0nrrsMK2nTkIxuPiRUWxVK&s=10",
    defaultSpicy: "None",
  },
  {
    id: "tuk-doung-kchei",
    name: "Young Coconut Water",
    khmerName: "ទឹកដូងខ្ចី",
    category: "Drink",
    price: 2.0,
    description:
      "Chilled coconut water served straight from the young coconut.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMAHQU565iw1yTRadUUOZMznI_uUmrBt5aAIrVGyA6eE7uAAra9s_OtY&s=10",
    defaultSpicy: "None",
  },
  {
    id: "kralan",
    name: "Kralan",
    khmerName: "ក្រឡាន",
    category: "Snack",
    price: 2.0,
    description: "Sticky rice, coconut and black beans roasted inside bamboo.",
    image:
      " https://ak-d.tripcdn.com/images/1mi03224x99vna8lb9FE5_R_600_400_R5_Q90.png?proc=source/trip",
    defaultSpicy: "None",
    popular: true,
  },
  {
    id: "nom-kroch",
    name: "Fried Banana",
    khmerName: "នំចេកបំពង",
    category: "Snack",
    price: 1.75,
    description: "Crispy fried banana fritters, best eaten warm.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiaKJWH6IUEAcqamwKPELj1WX2Tp_SSt4SrZLe3eS57dqdcjZNPbE5Y6ry&s=10",
    defaultSpicy: "None",
  },
  {
    id: "ansom-chrouk",
    name: "Ansom Chrouk",
    khmerName: "អន្សមជ្រូក",
    category: "Snack",
    price: 2.25,
    description:
      "Cylindrical sticky rice cake with pork and mung bean, wrapped in banana leaf.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJuz9m59daxwLG2ht-DyWduUPjST9arIuQxzAXAK-dHtRZ_zGcKF_Ta8SB&s=10",
    defaultSpicy: "None",
  },
  {
    id: "tuk-kolok",
    name: "Khmer Iced Coffee",
    khmerName: "កាហ្វេទឹកកក",
    category: "Drink",
    price: 1.75,
    description:
      "Strong dark-roast coffee over ice with sweetened condensed milk.",
    image:
      "https://domnor.com/admin/images/product/2023-05-22-05-51-33_306_1.jpg?v=1",
    defaultSpicy: "None",
  },
];

export const categories = Array.from(new Set(foods.map((f) => f.category)));
