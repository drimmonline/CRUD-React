import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { api } from "../service/api";
export const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    position: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setPostperPage] = useState(10);
  const [isDelete, setIsDelete] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const lastIndex = currentPage * postperPage;
  const firstIndex = lastIndex - postperPage;
  const currentPost = data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data?.length / postperPage) || 1;

  const getPagination = () => {
    if (totalPages <= 5) {
      // ถ้ามีไม่เกิน 5 หน้า ให้แสดงทั้งหมด
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
      // ถ้าอยู่หน้า 1, 2, 3 -> [1, 2, 3, 4, '...', หน้าสุดท้าย]
      return [1, 2, 3, 4, "...", totalPages];
    }
    if (currentPage >= totalPages - 2) {
      // ถ้าอยู่หน้าท้ายๆ -> [1, '...', ท้าย-3, ท้าย-2, ท้าย-1, ท้ายสุด]
      return [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };
  const pages = getPagination();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmitForm(e) {
    e.preventDefault();
    const newUser = await api.post("", formData);
    if (newUser) {
      setData((prev) => [...prev, newUser]);
      setFormData({ name: "", lastname: "", position: "" });
    }
    setIsSuccess(true);
  }

  async function handledeleteUser(id) {
    const result = await api.delete(`/${id}`);
    if (result) {
      console.log(`ID ${id} is deleted`);
      // อัปเดต state เพื่อให้ UI ลบรายการนั้นออกทันที
      setData((prev) => prev.filter((item) => item.id !== id));
    }
  }
  const confirmDelete = () => {
    handledeleteUser(selectedId); // 1. สั่งลบ
    setIsDelete(false); // 2. ปิด Modal ทันที
    setSelectedId(null); // 3. เคลียร์ค่า ID
  };
  useEffect(() => {
    const getPosts = async () => {
      const result = await api.get("");
      if (result) {
        setData(result);
      }
    };
    getPosts();
  }, []);
  const value = {
    data,
    setData,
    currentPage,
    setCurrentPage,
    postperPage,
    setPostperPage,
    currentPost,
    handleSubmitForm,
    handledeleteUser,
    confirmDelete,
    isDelete,
    selectedId,
    setIsDelete,
    setSelectedId,
    pages,
    formData,
    setFormData,
    handleChange,
    isSuccess,
    setIsSuccess,
  };
  return <UserContext.Provider value={value}> {children}</UserContext.Provider>;
};
