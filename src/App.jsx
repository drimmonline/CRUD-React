import { useEffect, useState } from "react";
import "./App.css";
import { productData } from "./mockdata";
import { ProductCard } from "./ProductCard";
import { Cartpage } from "./Cartpage";
import { Navbar } from "./Navbar";
import { Table } from "./Table";
import { FormInput } from "./FormInput";

function App() {
  const [data, setData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  const API_URL = `https://67eca027aa794fb3222e43e2.mockapi.io/members`;

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      setData(data);
    };
    getPosts();
  }, []);
  function handleSubmitForm(e) {
    e.preventDefault();
    let fieldInput = {
      name: name,
      lastname: lastname,
      position: position,
    };
    console.log(`ข้อมูล :${fieldInput}`);
    fetch(API_URL, {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
        body: JSON.stringify(fieldInput),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }

  function handledeleteUser(id) {
    fetch(
      `https://67eca027aa794fb3222e43e2.mockapi.io/members/
${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(`${result} data is delete`);
      });
  }
  return (
    <div className="min-h-screen flex flex-col items-center  bg-gray-50">
      <Navbar />
      <div className="text-center text-3xl font-bold mb-8  text-black">
        Generation Thailand
      </div>
      <div className="text-center text-3xl font-bold mb-8 text-black">
        Home - Admin Section
      </div>
      <div className="flex  gap-3">
        <button
          className="shadow-2xl text-black bg-white  p-5 rounded-md"
          onClick={() => setIsAdmin(!isAdmin)}
        >
          User Home Section
        </button>
        <button
          className="shadow-2xl text-black bg-white p-4 rounded-md"
          onClick={() => setIsAdmin(!isAdmin)}
        >
          Admin Home Section
        </button>
      </div>
      {isAdmin ? (
        <div>
          <FormInput
            handleSubmitForm={handleSubmitForm}
            setLastname={setLastname}
            setName={setName}
            setPosition={setPosition}
          />

          <Table data={data} handledeleteUser={handledeleteUser} />
        </div>
      ) : (
        <Table data={data} handledeleteUser={handledeleteUser} />
      )}

      {/* {productData.map((el, index) => (
        <ProductCard
          key={index}
          product={el}
          onAddToCart={handleAddToCart} // ส่ง props ชื่อ onAddToCart ไป
        />
      ))}

      <Cartpage cartItems={cartItems} onRemoveItem={handleRemoveItem} /> */}
    </div>
  );
}

export default App;
