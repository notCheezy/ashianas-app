import { create } from 'zustand';
import { Product } from './data';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  isGift?: boolean;
  giftNote?: string;
}

interface AppState {
  cart: CartItem[];
  wishlist: string[];
  isLoggedIn: boolean;
  addToCart: (product: Product, quantity: number, isGift?: boolean, giftNote?: string) => void;
  removeFromCart: (cartItemId: string) => void;
  toggleWishlist: (productId: string) => void;
  login: () => void;
  logout: () => void;
}

export const useStore = create<AppState>((set) => ({
  cart: [],
  wishlist: [],
  isLoggedIn: false,
  addToCart: (product, quantity, isGift, giftNote) => set((state) => {
    const id = `${product.id}-${isGift ? 'gift' : 'std'}`;
    const existing = state.cart.find(i => i.id === id);
    if (existing) {
      return { cart: state.cart.map(i => i.id === id ? { ...i, quantity: i.quantity + quantity } : i) };
    }
    return { cart: [...state.cart, { id, product, quantity, isGift, giftNote }] };
  }),
  removeFromCart: (cartItemId) => set((state) => ({
    cart: state.cart.filter(i => i.id !== cartItemId)
  })),
  toggleWishlist: (productId) => set((state) => ({
    wishlist: state.wishlist.includes(productId) 
      ? state.wishlist.filter(id => id !== productId)
      : [...state.wishlist, productId]
  })),
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
}));