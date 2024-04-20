import React, { useState } from "react";
import Nav from "../components/Nav";
import CardContainer from "../components/CardContainer";

const Details = () => {
  const [track, setTrack] = useState(null);

  return (
    <>
      <Nav />
      <div className="m-24 items-center justify-center flex">
        <div className="w-full md:w-2/3 ">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="name"
          >
            Enter Your Blood Sugar Level
          </label>
          <input
            onChange={(e) => setTrack(e.target.value)}
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Enter"
            id="name"
          ></input>
        </div>
      </div>
      <CardContainer />
    </>
  );
};

export default Details;
