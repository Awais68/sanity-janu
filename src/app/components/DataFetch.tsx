import React from "react";
// import client from '../../client'
import { client } from "@/sanity/lib/client";
import product from "@/sanity/schemaTypes/product";

const DataFetch = async () => {
  const query = await client.fetch(
    `*[_type == "product"]{
        _id,
      name,
      price,
      discountPercentage,
      tags,
      "imageUrl": image.asset->url
    }`
  );
  console.log(query);

  return (
    <div className="min-h-screen flex max-w-full">
      {query.map((product: any) => {
        return (
          <div
            key={product._id}
            className="flex  flex-wrap h-64 w-96  bg-gray-500  gap-4 m-4 rounded items-center justify-center overflow-hidden "
          >
            <img src={product.imageUrl} alt={product.name} />
            <h1 className="font-bold  bg-indigo-400">{product.name}</h1>
            <h2>{product.price}</h2>
            <h3>{product.discountPercentage}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default DataFetch;
