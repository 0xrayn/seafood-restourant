export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  emoji: string;
  badge?: string;
};

export const menuItems: MenuItem[] = [
  { id:1,  name:"Kepiting Saus Padang",   description:"Kepiting segar dimasak saus Padang pedas khas Nusantara, disajikan dengan nasi putih hangat.", price:125000, category:"Kepiting", emoji:"🦀", badge:"Best Seller" },
  { id:2,  name:"Kepiting Saus Tiram",    description:"Kepiting jumbo dengan saus tiram gurih, bawang putih, dan jahe segar pilihan.", price:135000, category:"Kepiting", emoji:"🦀" },
  { id:3,  name:"Udang Bakar Butter",     description:"Udang tiger segar dibakar dengan butter herb lemon, disajikan panas dengan saus sambal.", price:85000, category:"Udang", emoji:"🍤", badge:"Populer" },
  { id:4,  name:"Udang Saus Asam Manis",  description:"Udang besar digoreng crispy dengan saus asam manis dan potongan nanas segar.", price:78000, category:"Udang", emoji:"🍤" },
  { id:5,  name:"Cumi Goreng Tepung",     description:"Cumi segar dibalut tepung renyah, digoreng golden brown. Disajikan dengan mayo pedas.", price:65000, category:"Cumi", emoji:"🦑", badge:"Favorit" },
  { id:6,  name:"Cumi Bakar Bumbu Rujak", description:"Cumi bakar dengan bumbu rujak khas Jawa Timur, pedas segar dan menggugah selera.", price:72000, category:"Cumi", emoji:"🦑" },
  { id:7,  name:"Ikan Bakar Kerapu",      description:"Ikan kerapu segar dibakar dengan bumbu rempah Nusantara, disajikan dengan lalapan.", price:145000, category:"Ikan", emoji:"🐟", badge:"Premium" },
  { id:8,  name:"Gurame Asam Manis",      description:"Ikan gurame goreng crispy disiram saus asam manis dengan paprika dan nanas.", price:89000, category:"Ikan", emoji:"🐟" },
  { id:9,  name:"Kerang Hijau Kemangi",   description:"Kerang hijau segar dimasak dengan kemangi, cabai merah, dan bumbu rempah pilihan.", price:55000, category:"Kerang", emoji:"🦪" },
  { id:10, name:"Lobster Bakar Spesial",  description:"Lobster segar utuh dibakar dengan butter garlic dan lemon. Hidangan mewah istimewa.", price:285000, category:"Lobster", emoji:"🦞", badge:"Signature" },
  { id:11, name:"Nasi Goreng Seafood",    description:"Nasi goreng spesial dengan campuran udang, cumi, dan ikan segar plus telur mata sapi.", price:58000, category:"Nasi", emoji:"🍳" },
  { id:12, name:"Es Kelapa Muda",         description:"Kelapa muda segar langsung dari buahnya, menyegarkan dan alami.", price:18000, category:"Minuman", emoji:"🥥" },
];

export const categories = ["Semua","Kepiting","Udang","Cumi","Ikan","Kerang","Lobster","Nasi","Minuman"];

export type ThemeOption = { name: string; label: string; emoji: string };

export const seafoodThemes: ThemeOption[] = [
  { name: "dark",  label: "Gelap",  emoji: "🌙" },
  { name: "light", label: "Terang", emoji: "☀️" },
];
