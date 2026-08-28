const ModalDelete = ({ onClose, onConfirm, selectedId }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="card w-96 bg-base-100 shadow-xl relative">
        {/* ปุ่มกากบาทมุมขวาบน */}
        <button
          className="btn btn-sm btn-circle btn-ghost text-gray-400 hover:text-gray-700 absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="card-body mt-2 text-center items-center">
          {/* เพิ่ม Icon ถังขยะ สีแดงสื่อถึงการลบ (Danger) */}
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-2">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>

          <h2 className="card-title text-2xl font-bold text-white">
            ยืนยันการลบข้อมูล
          </h2>
          <p className="text-white text-sm mt-1">
            คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลนี้?
            การกระทำนี้จะไม่สามารถย้อนกลับได้
          </p>

          {/* ส่วนของปุ่ม จัดเรียงแนวนอน (flex-row) และแบ่งพื้นที่เท่ากัน (flex-1) */}
          <div className="flex flex-row gap-3 w-full mt-6">
            <button
              onClick={() => onConfirm(selectedId)}
              className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition-colors"
            >
              ใช่
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-md transition-colors"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
