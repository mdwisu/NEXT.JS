import { useRouter } from "next/router";
import React from "react";

export default function DetailProductPage() {
  const {query} = useRouter();
  console.log(query);
  
  
  return (
    <div>
      <h1>Detail Product</h1>
      <p>Product : {query.id}</p>
    </div>
  );
}
