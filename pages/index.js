import { useState } from "react";
import Image from "next/image";

import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import AddProduct from "../components/AddProduct";
import AddButton from "../components/AddButton";

import axios from "axios";

export default function Home({ foodList, admin }) {
  const [close, setClose] = useState(true);

  return (
    <div>
      <Slider />
      {<AddButton setClose={setClose} />}
      <ProductList productList={foodList} />
      {!close && <AddProduct setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.bbtoken === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("https://big-bowl.vercel.app/api/products");
  //console.log(res);
  return {
    props: {
      foodList: res.data,
      admin,
    },
  };
};
