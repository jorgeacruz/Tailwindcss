import React from "react";

export default function Accordion() {
 return (
   <div>
    <h1 className="py-2">
      <button className="flex flex-row justify-between w-full">
        <span >
          this is the title
        </span>
        <span>
          +
        </span>
      </button>
    </h1>
   </div>
 );
}