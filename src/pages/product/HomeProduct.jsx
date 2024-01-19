import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/productHeader/Header";

const HomeProduct = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center mt-14">
        <p className="font-medium text-lg">Welcome to my shop</p>
        <p className="text-sm font-normal pt-4">
          Discover a world of amaxing products!
        </p>
        <Link to="/productList">
          <button className="text-white bg-green-500   hover:bg-green-700 font-medium text-sm rounded-sm py-1 px-2 mt-4">
            Shop Now!
          </button>
        </Link>
      </div>
      <div>
        <p>This will contain list of products</p>
      </div>
    </div>
  );
};

export default HomeProduct;
