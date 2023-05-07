import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const Comment = () => {
  return (
    <div className="flex gap-4 items-start py-3">
      <div
        style={{
          width: "3rem",
          height: "3rem",
          minHeight: "3rem",
          minWidth: "3rem",
        }}
        className="relative rounded-full"
      >
        <Image src="/assets/prod_5.jpg" fill className="rounded-full" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">Customer</h4>
        <p className="text-sm">The fit is perfect, and quality is top-notch</p>
        <div className="flex items-center gap-3 mt-2">
          <button className="flex items-center gap-1 text-zinc-500 text-sm">
            <HeartIcon width={15} height={15} />
            Like
          </button>
          <span className="text-zinc-500 text-sm">7 Likes</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
