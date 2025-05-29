import React from 'react';
import { CartProvider } from './contexts/CartContext';   // 이름 export라서 { } 사용
import CartScreen from './components/CartScreen';           // CartScreen은 기본 export

export default function App() {
  return (
    <CartProvider>
      <CartScreen />
    </CartProvider>
  );
}
