import Link from "next/link";
import React from "react";

const CustomLink = props => {
  const { text, icon, className, href } = props;
  return (
    <>
      <Link
        href={href}
        {...props}
        className={`${className} w-fit flex items-center gap-3 rounded-lg text-sm text-zinc-600 font-semibold capitalize p-3 active:bg-zinc-200 hover:bg-zinc-100 transition bg-zinc-50`}
      >
        <span className="btn-text">{text}</span>
        <span className="btn-icon">{icon}</span>
      </Link>
    </>
  );
};

export default CustomLink;
