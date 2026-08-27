import { useState } from "react";
import "./App.css";
import { productData } from "./mockdata";
import { ProductCard } from "./ProductCard";
import { Cartpage } from "./Cartpage";

function App() {
  function handleRemoveItem(productName) {
    // ใช้ .filter() เพื่อกรองเอาเฉพาะสินค้าที่ "ชื่อไม่ตรงกับที่กดลบ" ไว้ในตะกร้า
    setCartItems(cartItems.filter((item) => item.productName !== productName));
  }
  // ย้ายตะกร้าสินค้ามาไว้ที่ตัวแม่ (App)
  const [cartItems, setCartItems] = useState([]);

  // ฟังก์ชันเพิ่มลงตะกร้า (รับข้อมูลสินค้า และจำนวนจาก counter)
  function handleAddToCart(item, quantity) {
    // mockdata ของเราไม่มี id เลยใช้ productName เป็นตัวอ้างอิงแทน
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.productName === item.productName,
    );

    if (isItemInCart) {
      // ถ้ามีสินค้าอยู่แล้ว ให้บวกจำนวนเพิ่มเข้าไป
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.productName === item.productName
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem,
        ),
      );
    } else {
      // ถ้ายังไม่มี ให้เพิ่มสินค้าใหม่พร้อมจำนวน
      setCartItems([...cartItems, { ...item, quantity: quantity }]);
    }
  }
  return (
    <div className="min-h-screen flex flex-col items-center py-10 bg-gray-50">
      <div className="text-center text-3xl font-bold mb-8">Products</div>

      {/* วนลูปสร้างการ์ดสินค้า และส่งฟังก์ชัน handleAddToCart ลงไป */}
      {productData.map((el, index) => (
        <ProductCard
          key={index}
          product={el}
          onAddToCart={handleAddToCart} // ส่ง props ชื่อ onAddToCart ไป
        />
      ))}

      {/* แยกหน้าตะกร้ามาไว้ด้านล่าง และส่งข้อมูล Array ในตะกร้าไปให้ */}
      <Cartpage cartItems={cartItems} onRemoveItem={handleRemoveItem} />
    </div>
  );
}

export default App;
