import React, { useState } from "react";

const Amount = (product) => {
  ///increment
  const [quantity, setQuantity] = useState(1);
  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > product?.stock) tempQty = product?.stock;
      return tempQty;
    });
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  return (
    <>
      <div className="d-flex ms-2 gap-4 ">
        <div className="mt-2 fs-5">Quantity:</div>
        <button
          onClick={increaseQty}
          className=" mt-2 "
          style={{ width: "2rem", height: "2rem", border: "1px solid" }}
        >
          +
        </button>
        <div className="text-dark fs-4 mt-2">{quantity}</div>
        <button
          onClick={decreaseQty}
          className="mt-2 "
          style={{ width: "2rem", height: "2rem", border: "1px solid" }}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Amount;
