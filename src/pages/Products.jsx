import React from 'react'
import { ProductItems } from '../utilities';

const Products = () => {
  return (
    <div className="flex flex-col px-[7%] py-5 text-white" id='products'>
      <h1 className="text-center text-white uppercase pb-9 text-[40px] font-semibold">
        <span>Our</span>
        <span className="text-[#d3ad7f]"> Products</span>
      </h1>
      <div className="grid grid-cols-fluid gap-4 text-base">
        <ProductItems />
      </div>
    </div>
  );
}

export default Products