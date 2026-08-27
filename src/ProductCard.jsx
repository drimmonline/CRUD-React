import { useState } from "react";

export const ProductCard = ({ product, onAddToCart }) => {
  const [counter, setCounter] = useState(1);

  function handleOnClick() {
    setCounter((prev) => prev + 1);
  }

  function handleOnClickDelete() {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  }

  return (
    <div className="bg-white shadow-xl w-xl text-black flex-col rounded-xl p-5 mb-5">
      <img src={product.image} alt={product.productName} className="mx-auto" />

      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={handleOnClickDelete}
          className="border rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer"
        >
          -
        </button>
        <span className="text-lg w-6 text-center">{counter}</span>
        <button
          onClick={handleOnClick}
          className="border rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer"
        >
          +
        </button>
      </div>

      <div className="text-xl text-center mt-3">{product.productName}</div>
      <div className="text-xl text-center text-blue-600 mb-4">
        {product.price} บาท
      </div>

      {/* เมื่อกดปุ่ม จะเรียกฟังก์ชันของตัวแม่ พร้อมส่ง สินค้า และ จำนวน ไปให้ */}
      <button
        className="w-full flex items-center justify-center border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white p-2 rounded-xl transition-colors cursor-pointer"
        onClick={() => onAddToCart(product, counter)}
      >
        Add to Cart
      </button>
    </div>
  );
};
