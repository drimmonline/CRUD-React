import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setPostperPage] = useState(10);
  const [isDelete, setIsDelete] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const lastIndex = currentPage * postperPage;
  const firstIndex = lastIndex - postperPage;
  const currentPost = data.slice(firstIndex, lastIndex).sort((a, b) => a - b);
  let pages = [];
  for (let i = 1; i <= Math.ceil(data?.length / postperPage); i++) {
    pages.push(i);
  }
  const API_URL = `https://67eca027aa794fb3222e43e2.mockapi.io/members`;

  function handleSubmitForm(e) {
    e.preventDefault();

    const fieldInput = {
      name: name,
      lastname: lastname,
      position: position,
    };

    fetch(API_URL, {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fieldInput),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }

  function handledeleteUser(id) {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(`${result} data is delete`);
      });
  }
  const confirmDelete = () => {
    handledeleteUser(selectedId); // 1. สั่งลบ
    setIsDelete(false); // 2. ปิด Modal ทันที
    setSelectedId(null); // 3. เคลียร์ค่า ID
  };
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      setData(data);
    };
    getPosts();
  }, []);
  const value = {
    data,
    setData,
    name,
    setName,
    lastname,
    setLastname,
    position,
    setPosition,
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
  };
  return <UserContext.Provider value={value}> {children}</UserContext.Provider>;
};
