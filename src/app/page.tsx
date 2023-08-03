"use client";

import Greets from "@/components/md/greet.mdx";

const Home = () => {
  return (
    <>
      <section className="container section-gap-margin">
        <h1 className="text-center">Welcome to MDX exploration!</h1>
        <div className="p-[1rem] rounded-md bg-gray-900 element-gap-top overflow-auto grid grid-cols-1 gap-5 max-h-[70vh]">
          <Greets />
        </div>
      </section>
    </>
  );
};

export default Home;
