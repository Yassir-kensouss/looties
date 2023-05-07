"use client";
import React, { useState } from "react";
import Select from "../ui-components/Select";
import Comment from "./Comment";
import Pagination from "../Pagination";

const sort = [
  { id: 1, name: "Newest", unavailable: false },
  { id: 2, name: "oldest", unavailable: false },
];

const ProductDiscussion = () => {
  const [selectedPerson, setSelectedPerson] = useState(sort[0]);
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800">Discussions</h3>
      <div className="flex gap-2 items-center my-4">
        <span className="text-zinc-500 font-medium text-sm">Sort by</span>
        <Select
          selectedPerson={selectedPerson}
          setSelectedPerson={setSelectedPerson}
          values={sort}
        />{" "}
      </div>
      <div className="rounded-lg border border-zinc-300 mt-8 p-4">
        <div className="divide-y">
          <Comment />
          <Comment />
          <Comment />
        </div>
        <div className="flex justify-center w-full my-6">
          <Pagination />
        </div>
      </div>
      <div className="rounded-lg border border-zinc-300 mt-8 p-4">
        <textarea
          className="w-full p-3 rounded-lg border-zinc-400 bg-zinc-50 focus:outline-2 focus:outline-zinc-300"
          rows={4}
          placeholder="Question / Topic"
        />
        <button className="bg-gray-800 text-white rounded-lg p-3 text-sm mt-2 transition hover:opacity-800">
          Start descusion
        </button>
      </div>
    </div>
  );
};

export default ProductDiscussion;
