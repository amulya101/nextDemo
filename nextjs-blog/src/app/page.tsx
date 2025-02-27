import React from "react";

//try clsx for dynamic class
export default function Home() {
  const bg_style = {
    height: "100vh",
  };
  return (
    <div
      className= "bg-black relative overflow-hidden bg-cover bg-no-repeat bg-center bg-fixed"
      style={bg_style}
    >
      <div className="absolute flex items-center justify-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
        <div
          className="flex flex-col backdrop-opacity-10 backdrop-invert bg-white/5 mb-96 px-20 h-1/4 text-white
          items-center m-auto justify-center rounded-lg border-none border-2"
        >
          <h2 className="mb-7 font-roboto text-8xl">AMULYA'S ZONE</h2>
        </div>
        
      </div>
      <div className="items-center text-white text-4xl">
          PAGE UNDER CONSTRUCTION
      </div>
    </div>
  );
}
