export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  giftable: boolean;
}

export const CATALOGUE: Product[] = [
  {
    id: 'ash-001',
    name: 'Antique Elegant Black and Gold Filigree Dangler',
    category: 'Earrings',
    price: 1100,
    description: 'Beautiful and attractive danglers which can be worn with traditional clothing. Filigree design with intricate gold detailing.',
    // Highly stable image URL
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    giftable: true,
  },
  {
    id: 'ash-002',
    name: '92.5 Sterling Silver Shimmering Orb Pearl Stud',
    category: '925 Silver',
    price: 525,
    description: 'Minimalist shimmering orb stud earrings featuring a delicate central pearl. Made in 92.5 Sterling Silver.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80',
    giftable: true,
  },
  {
    id: 'ash-003',
    name: 'Gemstone Encrusted Hoops',
    category: '925 Silver',
    price: 2150,
    description: 'Elegant silver hoops completely encrusted with fine-cut gemstones for a sophisticated evening look.',
    image: 'https://images.unsplash.com/photo-1599643477877-530e55a8e0f6?auto=format&fit=crop&w=800&q=80',
    giftable: true,
  }
];

export const CATEGORIES = [
  { slug: 'earrings', name: 'Earrings', image: CATALOGUE[0].image },
  { slug: '925-silver', name: '925 Silver', image: CATALOGUE[1].image },
  { slug: 'necklace', name: 'Necklace & Sets', image: CATALOGUE[2].image },
];