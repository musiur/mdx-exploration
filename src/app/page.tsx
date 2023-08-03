"use client";

import Greets from "@/components/md/greet.mdx";

const Home = () => {
  return (
    <>
      <section className="container section-gap-margin">
        <h1>Home Page</h1>
        <div className="p-[1rem] rounded-md bg-gray-900 element-gap-top">
          <Greets />
        </div>
      </section>
    </>
  );
};

export default Home;
