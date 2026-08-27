export const Cartpage = ({ cartItems, onRemoveItem }) => {
  // รับ props ชื่อ cartItems ซึ่งเป็น Array ของสินค้าในตะกร้า

  return (
    <div className="flex flex-col items-center justify-center py-20 w-full px-4">
      <div className="text-3xl font-bold mb-5">Shopping Cart</div>

      {cartItems.length === 0 ? (
        <div className="text-gray-500 text-xl">คุณยังไม่ได้สั่งสินค้า</div>
      ) : (
        <div className="w-full max-w-xl bg-white shadow-md rounded-xl p-5">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-3"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.productName}
                  className="w-12 h-12 rounded-md object-cover"
                />
                <div>
                  <div className="text-lg font-medium">{item.productName}</div>
                  <div className="text-gray-600 text-sm">
                    จำนวน: {item.quantity} ชิ้น
                  </div>
                </div>
              </div>

              {/* 2. เพิ่มปุ่มลบสินค้า */}
              <button
                onClick={() => onRemoveItem(item.productName)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer transition-colors text-sm"
              >
                ลบ
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
