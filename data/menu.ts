export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
};

export const menuItems: MenuItem[] = [
  { id:1,  name:"Kepiting Saus Padang",   description:"Kepiting segar dimasak saus Padang pedas khas Nusantara, disajikan dengan nasi putih hangat.", price:125000, category:"Kepiting", image:"/images/kepiting-saus-padang.png", badge:"Best Seller" },
  { id:2,  name:"Kepiting Saus Tiram",    description:"Kepiting jumbo dengan saus tiram gurih, bawang putih, dan jahe segar pilihan.", price:135000, category:"Kepiting", image:"/images/kepiting-saus-tiram.png" },
  { id:3,  name:"Udang Bakar Butter",     description:"Udang tiger segar dibakar dengan butter herb lemon, disajikan panas dengan saus sambal.", price:85000, category:"Udang", image:"https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&q=75", badge:"Populer" },
  { id:4,  name:"Udang Saus Asam Manis",  description:"Udang besar digoreng crispy dengan saus asam manis dan potongan nanas segar.", price:78000, category:"Udang", image:"https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=400&q=75" },
  { id:5,  name:"Cumi Goreng Tepung",     description:"Cumi segar dibalut tepung renyah, digoreng golden brown. Disajikan dengan mayo pedas.", price:65000, category:"Cumi", image:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=75", badge:"Favorit" },
  { id:6,  name:"Cumi Bakar Bumbu Rujak", description:"Cumi bakar dengan bumbu rujak khas Jawa Timur, pedas segar dan menggugah selera.", price:72000, category:"Cumi", image:"/images/cumi-bakar-rujak.png" },
  { id:7,  name:"Ikan Bakar Kerapu",      description:"Ikan kerapu segar dibakar dengan bumbu rempah Nusantara, disajikan dengan lalapan.", price:145000, category:"Ikan", image:"https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400&q=75", badge:"Premium" },
  { id:8,  name:"Gurame Asam Manis",      description:"Ikan gurame goreng crispy disiram saus asam manis dengan paprika dan nanas.", price:89000, category:"Ikan", image:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=75" },
  { id:9,  name:"Kerang Hijau Kemangi",   description:"Kerang hijau segar dimasak dengan kemangi, cabai merah, dan bumbu rempah pilihan.", price:55000, category:"Kerang", image:"/images/kerang-hijau-kemangi.png" },
  { id:10, name:"Lobster Bakar Spesial",  description:"Lobster segar utuh dibakar dengan butter garlic dan lemon. Hidangan mewah istimewa.", price:285000, category:"Lobster", image:"/images/lobster-bakar-spesial.png", badge:"Signature" },
  { id:11, name:"Nasi Goreng Seafood",    description:"Nasi goreng spesial dengan campuran udang, cumi, dan ikan segar plus telur mata sapi.", price:58000, category:"Nasi", image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=75" },
  { id:12, name:"Es Kelapa Muda",         description:"Kelapa muda segar langsung dari buahnya, menyegarkan dan alami.", price:18000, category:"Minuman", image:"https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=75" },
];

export const categories = ["Semua","Kepiting","Udang","Cumi","Ikan","Kerang","Lobster","Nasi","Minuman"];

export type ThemeOption = { name: string; label: string; emoji: string };

export const seafoodThemes: ThemeOption[] = [
  { name: "dark",  label: "Gelap",  emoji: "🌙" },
  { name: "light", label: "Terang", emoji: "☀️" },
];