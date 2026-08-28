import { useEffect, useState } from "react";
import "./App.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Homepage } from "./pages/Homepage";
import { Ownerpage } from "./pages/Ownerpage";
import { Layout } from "./pages/Layout";
import { UserHomeSection } from "./components/UserHomeSection";
import { AdminSection } from "./components/AdminSection";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setPostperPage] = useState(10);
  const [isDelete, setIsDelete] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const API_URL = `https://67eca027aa794fb3222e43e2.mockapi.io/members`;

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      setData(data);
    };
    getPosts();
  }, []);

  const lastIndex = currentPage * postperPage;
  const firstIndex = lastIndex - postperPage;
  const currentPost = data.slice(firstIndex, lastIndex).sort((a, b) => a - b);
  const confirmDelete = () => {
    handledeleteUser(selectedId); // 1. สั่งลบ
    setIsDelete(false); // 2. ปิด Modal ทันที
    setSelectedId(null); // 3. เคลียร์ค่า ID
  };

  function handleSubmitForm(e) {
    e.preventDefault();

    const fieldInput = {
      name: name,
      lastname: lastname,
      position: position,
    };
    console.log(`ข้อมูลData :${name} ${lastname} ${position}`);

    console.log(`ข้อมูล :${fieldInput}`);
    fetch(API_URL, {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        lastname: lastname,
        position: position,
      }),
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: (
        <div>
          <p>Page Not Found</p>
        </div>
      ),
      children: [
        {
          path: "/",
          element: <Homepage />,
          children: [
            {
              path: "userhomsection",
              element: (
                <UserHomeSection
                  data={currentPost}
                  handledeleteUser={handledeleteUser}
                  totalPosts={data?.length || 0}
                  postperPage={postperPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  setIsDelete={setIsDelete}
                  isDelete={isDelete}
                  confirmDelete={confirmDelete}
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                />
              ),
            },
            {
              path: "adminsection",
              element: (
                <AdminSection
                  handleSubmitForm={handleSubmitForm}
                  handledeleteUser={handledeleteUser}
                  setName={setName}
                  setLastname={setLastname}
                  setPosition={setPosition}
                  data={currentPost}
                  totalPosts={data?.length || 0}
                  postperPage={postperPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  setIsDelete={setIsDelete}
                  isDelete={isDelete}
                  confirmDelete={confirmDelete}
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                />
              ),
            },
          ],
        },
        { path: "owner", element: <Ownerpage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
