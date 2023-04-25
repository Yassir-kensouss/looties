import React from "react";
import ExperienceCard from "../ui-components/ExperienceCard";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

const Experiences = () => {
  return (
    <section className="mt-20 leading-normal">
      <h2 className="text-3xl text-zinc-800 capitalize font-semibold">
        We provide best
        <br /> customer experiences
      </h2>
      <div className="mt-10 flex items-center justify-between flex-col lg:flex-row gap-y-8">
        <ExperienceCard
          icon={<CurrencyDollarIcon width="100%" height={28} />}
          title="Original Products"
          description="We provide money back guarantee if the product are not original"
        />
        <ExperienceCard
          icon={<CurrencyDollarIcon width="100%" height={28} />}
          title="Original Products"
          description="We provide money back guarantee if the product are not original"
        />
        <ExperienceCard
          icon={<CurrencyDollarIcon width="100%" height={28} />}
          title="Original Products"
          description="We provide money back guarantee if the product are not original"
        />
        <ExperienceCard
          icon={<CurrencyDollarIcon width="100%" height={28} />}
          title="Original Products"
          description="We provide money back guarantee if the product are not original"
        />
      </div>
    </section>
  );
};

export default Experiences;
