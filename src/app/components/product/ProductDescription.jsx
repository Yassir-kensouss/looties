import React, { useEffect, useRef, useState } from "react";

const ProductDescription = ({ product }) => {
  const description = useRef(null);

  const [displayBtn, setDisplayBtn] = useState(false);
  const [height, setHeight] = useState(300);

  useEffect(() => {
    if (description.current.offsetHeight > 300) {
      setDisplayBtn(true);
    }
  }, []);

  const handleHeight = () => {
    setHeight(height === "max-content" ? 300 : "max-content");
    setDisplayBtn(!displayBtn);
  };

  return (
    <div className="py-4">
      <div
        style={{ height, overflow: "hidden" }}
        className={
          displayBtn ? "product-description gradient" : "product-description"
        }
      >
        <div
          ref={description}
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>
      {description.current?.offsetHeight > 300 ? (
        <button
          className="hover:text-gray-500 transition text-gray-600 capitalize underline decoration-dotted underline-offset-4"
          onClick={handleHeight}
        >
          {displayBtn ? "View More" : "View Less"}
        </button>
      ) : null}
    </div>
  );
};

export default ProductDescription;
