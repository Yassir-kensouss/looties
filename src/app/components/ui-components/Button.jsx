import React from "react";

const Button = props => {
  const { text, icon, className } = props;
  return (
    <>
      <button
        {...props}
        className={`${className} flex items-center gap-3 rounded-xl text-sm text-zinc-600 font-semibold capitalize p-3 active:bg-zinc-200 hover:bg-zinc-100 transition bg-zinc-50`}
      >
        <span className="btn-text">{text}</span>
        <span className="btn-icon">{icon}</span>
      </button>
    </>
  );
};

export default Button;
