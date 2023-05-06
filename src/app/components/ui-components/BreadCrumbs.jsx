import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const BreadCrumbs = ({ crumbs }) => {
  return (
    <div className="flex gap-3">
      {crumbs.map((crumb, index) => (
        <div key={index} className="flex items-center gap-3 text-sm">
          {index !== crumbs.length - 1 ? (
            <Link className="font-medium hover:text-zinc-700" href={crumb.link}>
              {crumb.label}
            </Link>
          ) : (
            <span className="font-medium text-zinc-300">{crumb.label}</span>
          )}
          {index !== crumbs.length - 1 ? (
            <ChevronRightIcon width={14} height={14} />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
