import React from "react";

const Stats = () => {
  const stats = [
    { id: 1, name: "Transactions every 24 hours", value: "44 Hundred" },
    { id: 2, name: "Assets under holding", value: "1 Thousand" },
    { id: 3, name: "New users annually", value: "6,000" },
    { id: 4, name: "☆ Rating", value: "4.5" },
  ];
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="text-center mb-10">
        <h1 className="font-bold font-serif text-4xl">
          Trusted by creators worldwide
        </h1>
        <p className="text-2xl text-gray-500 font-serif font-thin my-2 tracking-wider">
          Lorem ipsum dolor sit amet consect adipisicing possimus.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4 ">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4  "
            >
              <dt className="text-base leading-7 text-gray-600 ">
                {stat.name}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Stats;
