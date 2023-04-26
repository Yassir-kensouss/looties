import {
  ArrowDownRightIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = props => {
  const { photo, caption, label, link } = props;

  return (
    <div className="relative category-card-overlay">
      <Image
        width={300}
        height={300}
        alt={caption}
        className="rounded-lg"
        src={photo}
      />
      <Link
        href={link}
        className="font-medium w-10/12 capitalize text-zinc-700 flex items-center justify-between bg-white hover:bg-zinc-50 hover:shadow-xl active:bg-zinc-100 transition rounded-lg p-4 z-20 absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <span>{label}</span>
        <ArrowRightIcon width={22} height={22} />
      </Link>
    </div>
  );
};

export default CategoryCard;
