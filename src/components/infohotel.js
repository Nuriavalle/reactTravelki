import React from "react";
import logoHo from "../images/Holiday_Inn_Logo.svg.png"


function infoHotel() {
  return (
    <div class="bg-white-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <div class="relative flex flex-col bg-clip-border rounded-xl  text-[#0D3B66] shadow-md w-full max-w-[20rem] p-8">
  <div class="relative pb-4 m-0 mb-4 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-[#B5B5B5]">
    <img src={logoHo} class=""/>
    <h1 class="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-[#0D3B66] text-7xl">
      <span class="mt-2 text-4xl">$</span>100
      <span class="self-end text-4xl">/noche</span>
    </h1>
  </div>
    <button
      class="align-middle select-none mb-4 font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 rounded-lg bg-[#0D3B66] text-white shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
      type="button">
      Buy Now
    </button>
  <div class="p-0">
    <ul class="flex flex-col gap-4">
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base [#0D3B66] antialiased font-normal leading-relaxed text-inherit">
          5 team members
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans [#0D3B66] text-base antialiased font-normal leading-relaxed text-inherit">
          200+ components
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans [#0D3B66] text-base antialiased font-normal leading-relaxed text-inherit">
          40+ built-in pages
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans [#0D3B66]  text-base antialiased font-normal leading-relaxed text-inherit">
          1 year free updates
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans [#0D3B66] text-base antialiased font-normal leading-relaxed text-inherit">
          Life time technical support
        </p>
      </li>
    </ul>
  </div>
  
  </div>
</div> 
  );
};
export default infoHotel;
