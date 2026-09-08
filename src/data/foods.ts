import type { Food } from "../types";

// Placeholder images — swap the `image` field for real photos later.
const img = (label: string, tone: "brick" | "turmeric" | "leaf" = "brick") => {
  const colors = { brick: "B5451B", turmeric: "C08A1E", leaf: "3F6B3B" };
  return `https://placehold.co/600x450/${colors[tone]}/FFFCF6?font=roboto&text=${encodeURIComponent(label)}`;
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
    image: img("Bai Sach Chrouk"),
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
  },
  {
    id: "samlor-machu-kroeung",
    name: "Samlor Machu Kroeung",
    khmerName: "សម្លម្ជូគ្រឿង",
    category: "Soup",
    price: 4.0,
    description:
      "Tangy herbal soup with beef, lemongrass, galangal and turmeric.",
    image: img("Samlor Machu Kroeung"),
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
    image: img("Samlor Kor Ko"),
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
    image: img("Lort Cha"),
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
    image: img("Khmer Chicken Curry"),
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
    image: img("Sweet Sour Fish"),
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
      "https://commons.wikimedia.org/wiki/Special:FilePath/Grilled%20Squid.JPG?width=600",
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
    image: img("Beef Salad", "leaf"),
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
    image: img("Cha Houy Teuk", "turmeric"),
    defaultSpicy: "None",
  },
  {
    id: "num-ansom-chek",
    name: "Banana Sticky Rice",
    khmerName: "នំអន្សមចេក",
    category: "Dessert",
    price: 1.5,
    description: "Sticky rice and banana steamed in banana leaf.",
    image: img("Banana Sticky Rice", "turmeric"),
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
    image: img("Num Kom", "turmeric"),
    defaultSpicy: "None",
  },
  {
    id: "sankhya-lapov",
    name: "Pumpkin Custard",
    khmerName: "សង់ខ្យាល្ពៅ",
    category: "Dessert",
    price: 2.0,
    description: "Steamed egg custard baked inside a whole pumpkin.",
    image: img("Pumpkin Custard", "turmeric"),
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
    image: img("Lemongrass Pork"),
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
    image: img("Grilled Fish", "leaf"),
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
    image: img("Grilled Beef", "leaf"),
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
    image: img("Mee Kola"),
    defaultSpicy: "Mild",
  },
  {
    id: "samlor-prohok",
    name: "Samlor Prohok",
    khmerName: "សម្លប្រហុក",
    category: "Soup",
    price: 3.75,
    description: "Rich fermented-fish soup with pork, eggplant and long beans.",
    image: img("Samlor Prohok"),
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
    image: img("Bobor Khmer"),
    defaultSpicy: "None",
  },
  {
    id: "nom-plae-ai",
    name: "Nom Plae Ai",
    khmerName: "នំប្លែអាយ",
    category: "Dessert",
    price: 1.5,
    description: "Palm-sugar filled rice balls rolled in fresh grated coconut.",
    image: img("Nom Plae Ai", "turmeric"),
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
    image: img("Morning Glory", "leaf"),
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
    image: img("Pork Skewers", "leaf"),
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
    image: img("Ginger Chicken"),
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
    image: img("Fish Turmeric Broth"),
    defaultSpicy: "Medium",
  },
  {
    id: "mee-cha",
    name: "Mee Cha",
    khmerName: "មីឆា",
    category: "Noodles",
    price: 3.25,
    description: "Stir-fried egg noodles with pork, egg and mixed vegetables.",
    image: img("Mee Cha"),
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
    image: img("Sugarcane Juice", "turmeric"),
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
    image: img("Coconut Water", "turmeric"),
    defaultSpicy: "None",
  },
  {
    id: "kralan",
    name: "Kralan",
    khmerName: "ក្រឡាន",
    category: "Snack",
    price: 2.0,
    description: "Sticky rice, coconut and black beans roasted inside bamboo.",
    image: img("Kralan", "turmeric"),
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
    image: img("Fried Banana", "turmeric"),
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
    image: img("Ansom Chrouk", "turmeric"),
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
    image: img("Khmer Iced Coffee", "turmeric"),
    defaultSpicy: "None",
  },
];

export const categories = Array.from(new Set(foods.map((f) => f.category)));
