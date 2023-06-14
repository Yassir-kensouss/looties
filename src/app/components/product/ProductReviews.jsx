import React, { useState } from "react";
import ProductReview from "./ProductReview";
import AddReview from "./AddReview";

const ProductReviews = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 focus:ring-2 ring-offset-2 ring-gray-500 hover:bg-zinc-200 active:bg-zinc-100 text-sm p-3 bg-zinc-100 rounded-lg"
      >
        Write a Review
      </button>
      <div className="grid grid-cols-2 gap-12 mt-8">
        <ProductReview
          rating="5"
          review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis nihil quaerat repudiandae numquam debitis temporibus deleniti natus explicabo necessitatibus saepe totam, sit eaque consectetur nostrum dignissimos quod amet optio iste?"
          username="John kholman"
          createdAt="May 30, 2023"
        />
        <ProductReview
          rating="5"
          review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis nihil quaerat repudiandae numquam debitis temporibus deleniti natus explicabo necessitatibus saepe totam, sit eaque consectetur nostrum dignissimos quod amet optio iste?"
          username="John kholman"
          createdAt="May 30, 2023"
        />
        <ProductReview
          rating="5"
          review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis nihil quaerat repudiandae numquam debitis temporibus deleniti natus explicabo necessitatibus saepe totam, sit eaque consectetur nostrum dignissimos quod amet optio iste?"
          username="John kholman"
          createdAt="May 30, 2023"
        />
      </div>
      <AddReview isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ProductReviews;
