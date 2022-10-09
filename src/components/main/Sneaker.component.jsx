import React from "react";
import SneakerLeft from "../sneakerLeft/SneakerLeft.component";
import SneakerRight from "../sneakerRight/SneakerRight.component";
const Sneaker = () => {
  return (
    <main>
      <section className="flex justify-evenly sneaker md:py-10">
        <div className="md:w-[85%] w-full flex flex-col md:flex md:flex-row">
          <SneakerLeft />
          <SneakerRight />
        </div>
      </section>
    </main>
  );
};

export default Sneaker;
