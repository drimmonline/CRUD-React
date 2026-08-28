const ModalDelete = ({ onClose, onConfirm, selectedId }) => {
  return (
    // 1. เพิ่ม div คลุมเต็มจอ (fixed inset-0) จัดให้อยู่ตรงกลาง (flex items-center justify-center)
    // และเพิ่มพื้นหลังโปร่งแสง (bg-black/50) พร้อม z-index สูงๆ (z-50) กันโดนบัง
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* 2. เปลี่ยนจาก absolute เป็น relative เพื่อให้ปุ่ม x อ้างอิงตำแหน่งจากมุมกล่องนี้ */}
      <div className="card w-96 bg-base-100 card-xs shadow-sm relative">
        {/* เพิ่ม onClick ให้ปุ่ม x ด้วย และปรับให้อยู่มุมขวาบนแบบพอดีๆ */}
        <button
          className="btn btn-sm btn-circle btn-ghost text-red-400 absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="card-body mt-2">
          <h2 className="card-title">Confirm Delete</h2>
          <p>คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลนี้?</p>

          <div className="justify-end card-actions mt-4">
            <button
              className="btn btn-error text-white" // แนะนำให้ใช้ btn-error สำหรับปุ่มลบ (สีแดง)
              onClick={() => onConfirm(selectedId)}
            >
              Yes
            </button>
            <button className="btn btn-ghost text-gray-500" onClick={onClose}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
