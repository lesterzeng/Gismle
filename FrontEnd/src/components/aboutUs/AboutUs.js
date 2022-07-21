import React from "react";
import ismail from "./Ismail.jpg";
import gina from "./gina.jpg";
import lester from "./Lester.jpg";

const aboutUs = () => {
  return (
    <div className="text-4xl text-center bg-slate-300">
      <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
        Gismle App
      </h1>

      <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">
        is the flexible work management tool where teams can ideate plans,
      </h3>
      <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">
        collaborate on projects, organize workflows, and track progress in a
        visual,
      </h3>
      <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">
        productive, and rewarding way. From brainstorm to planning to execution,
      </h3>
      <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">
        Gismle manages the big milestones and the day-to-day tasks of working
        together
      </h3>
      <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">
        and getting things done.
      </h3>

      {/* <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">
        is the flexible work management tool where teams can ideate plans,
        collaborate on projects, organize workflows, and track progress in a
        visual, productive, and rewarding way. From brainstorm to planning to
        execution, Gismle manages the big milestones and the day-to-day tasks of
        working together and getting things done.
      </h3> */}

      {/* <h1>The team consists</h1>
      <h2>CTO - Ismail</h2>
      <h2>Tech Lead - Ismail</h2>
      <h2>Code Monkeys - Gina and Lester</h2> */}
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Meet the <u className="text-blue-600">team</u>
          </h2>

          <div className=" grid md:grid-cols-4 xl:grid-cols-3 gap-x-3 lg:gap-l-10">
            <div className="mb-5 grid-gap-2  ">
              <img
                src={ismail}
                className="rounded-full mx-auto shadow-lg mb-4 h-96"
                alt=""
                // style="max-width: 100px"
              />
              <p className="font-bold mb-2">Ismail</p>
              <p className="text-gray-500">Backend Dev</p>
            </div>
            <div className="mb-5">
              <img
                src={gina}
                className="rounded-full mx-auto shadow-lg mb-4 h-96"
                alt=""
                // style="max-width: 100px"
              />

              <p className="font-bold mb-2">Gina</p>
              <p className="text-gray-500">Frontend Dev</p>
            </div>
            <div className="mb-5">
              <img
                src={lester}
                className="rounded-full mx-auto shadow-lg mb-4 h-96"
                alt=""
                // style="max-width: 100px"
              />
              <p className="font-bold mb-2">Lester</p>
              <p className="text-gray-500">Frontend Dev</p>
            </div>
          </div>
        </section>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default aboutUs;
