import React, { useState } from "react";
import ProductReview from "./ProductReview";
import AddReview from "./AddReview";
import ReviewsSkeleton from "@/components/loading skeletons/ReviewsSkeleton";

const ProductReviews = ({ reviews = [], isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="product-reviews-container">
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 focus:ring-2 ring-offset-2 outline-none ring-gray-500 hover:bg-zinc-200 active:bg-zinc-100 text-sm p-3 bg-zinc-100 rounded-lg"
      >
        Write a Review
      </button>
      {reviews.length > 0 ? (
        <>
          {isLoading ? (
            <ReviewsSkeleton className="mt-8" />
          ) : (
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mt-8">
              {reviews.map(review => (
                <ProductReview
                  rating={review.rating}
                  review={review.review}
                  username={review.username}
                  createdAt={review.createdAt}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <p className="mt-4 text-gray-600">
          This product does not have any reviews for the moment.
        </p>
      )}
      <AddReview isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default ProductReviews;
