import { useState } from "react";

export default function Accordion({empresa, cargo, funcao}) {

  const [accordionOpen, setAccordionOpen] = useState(false);

 return (
   <div className="py-0">
    
      <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex flex-row justify-between w-full">
       <div className="flex flex-row w-full">
        <span className="text-white font-bold text-3xl text-left hover:text-black duration-300 hover:scale-105" >{empresa}</span>
       </div>

     {/**  {accordionOpen ?  <span> - </span> : <span> + </span> } */}  
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-black text-sm 
      ${ accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0" }`}>
        <div className="overflow-hidden">
          <p className="w-full p-1 text-lg font-bold text-gray-500 hover:text-black">{cargo}</p>
          <p className="w-full p-1 text-md"> {funcao} </p>
          <hr className="my-2 w-20"/>
        </div>
      </div>
  
   </div>
 );
}