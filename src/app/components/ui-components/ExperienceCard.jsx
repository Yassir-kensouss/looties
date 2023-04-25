import React from "react";

const ExperienceCard = props => {
  const { icon, description, title } = props;

  return (
    <div>
      <div className="w-14 h-14 rounded-lg bg-zinc-100 text-zinc-800 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="my-2 capitalize text-xl text-zinc-800 font-semibold">
        {title}
      </h3>
      <p className="max-w-md text-sm text-gray-700 leading-snug">
        {description}
      </p>
    </div>
  );
};

export default ExperienceCard;
