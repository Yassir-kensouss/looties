import { EnvelopeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const MailInput = () => {
  return (
    <div className="w-72 flex items-center gap-4 bg-zinc-50 border-2 border-zinc-100 p-2 rounded-lg text-zinc-600 font-we">
      <EnvelopeIcon width={18} height={18} />
      <input
        type="text"
        placeholder="Enter your mail"
        className="h-8 text-sm bg-transparent"
      />
    </div>
  );
};

export default MailInput;
