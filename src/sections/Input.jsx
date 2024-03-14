import React, { useEffect, useState } from "react";
import Button from "../components/Buttons";

function Input() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async () => {
    const uri = encodeURIComponent(inputValue.toString());
    const url = "https://cleanuri.com";
    const shortenAPI = `${url}/api/v1/shorten`;
    console.log(uri);

    try {
      // Fetch post to shortenAPI
      const res = await fetch(shortenAPI, {
        method: "POST",
        body: `url=${uri}`, // Adjust body format for form-urlencoded
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json(); // Parse response JSON
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  return (
    <section className="relative -translate-y-[6rem] px-4 flex flex-col lg:px-12">
      <div
        className={`flex flex-col lg:flex-row p-8 lg:p-14 rounded-xl gap-4 bg-darkViolet 
          
            bg-input-bg-mobile bg-right-top
            lg:bg-input-bg-desktop bg-no-repeat lg:object-contain lg:bg-center lg:first:bg-cover
         `}
      >
        <input
          type="text"
          className="p-4 lg:py-5 lg:px-8 rounded-lg placeholder:text-grayishViolet lg:w-[80%] lg:text-lg"
          placeholder="Shorten a link here..."
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <Button
          label={"Shorten It!"}
          border={"rounded-lg text-white"}
          onClick={handleSubmit}
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-8 lg:p-8 gap-4">
        <h3>htps://www.frontendmentor.io</h3>
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
          <a href="#" className="text-cyan font-medium">
            https://rel.ink/k4lKyk
          </a>
          <Button label={"Copy"} border={"rounded-md text-white"} />
        </div>
      </div>
    </section>
  );
}

export default Input;
