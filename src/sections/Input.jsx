import React, { memo, useState, useEffect } from "react";
import Button from "../components/Buttons";
import Result from "../components/Result";
import Image from "next/image";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [copyIndex, setCopyIndex] = useState(null);
  const [alertInput, setAlertInput] = useState(false);

  useEffect(() => {
    // Ambil data dari local storage saat komponen pertama kali dimuat
    const storedData = localStorage.getItem("shortlinkData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []); // Array kosong agar useEffect hanya dijalankan sekali saat komponen dimuat

  const handleOnchange = (e) => {
    setInputValue(e.target.value);
    setAlertInput(e.target.value === "");
  };

  const handleSubmit = async () => {
    const uri = encodeURIComponent(inputValue.toString());
    if (uri !== "") {
      try {
        const res = await fetch("/api/shortlink", {
          method: "POST",
          body: `url=${uri}`,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const dataJSON = await res.json();
        const newData = { input: inputValue, result: dataJSON.result_url };
        setData([...data, newData]);

        // Simpan data baru ke local storage
        localStorage.setItem(
          "shortlinkData",
          JSON.stringify([...data, newData])
        );

        setInputValue("");
      } catch (error) {
        console.error("Fetch error:", error);
      }
    } else {
      setAlertInput(true);
    }
  };

  const handleCopy = async (index) => {
    try {
      await navigator.clipboard.writeText(data[index].result);
      setCopyIndex(index);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <section className="relative -translate-y-[6rem] px-4 flex flex-col lg:px-12">
      <div
        className={`flex flex-col lg:flex-row p-8 lg:py-14  rounded-xl gap-4 bg-darkViolet 
          ${alertInput && "lg:pt-14 lg:pb-8"}
          bg-[url('/bg-shorten-mobile.svg')] bg-right-top
          lg:bg-[url('/bg-shorten-desktop.svg')] bg-no-repeat lg:object-contain lg:bg-center lg:first:bg-cover
       `}
      //  style={{backgroundImage:`url('/next.svg')`}}
      >
        <div className="flex flex-col lg:w-[80%] lg:text-lg gap-2">
          <input
            value={inputValue}
            type="text"
            className={`p-4 lg:py-4 lg:px-8 rounded-lg placeholder:text-grayishViolet ${
              alertInput && "border-red border-2"
            }`}
            placeholder="Shorten a link here..."
            onChange={handleOnchange}
          />
          {alertInput && <p className="text-red italic">Please add a link</p>}
        </div>
        <div className="flex flex-col">
          <Button
            label={"Shorten It!"}
            border={"rounded-lg text-white pt-5 pb-4"}
            onClick={handleSubmit}
          />
        </div>
      </div>
      {data.map((item, index) => (
        <Result
          key={index}
          inputValue={item.input}
          result={item.result}
          onCopy={() => handleCopy(index)}
          isCopied={index === copyIndex}
        />
      ))}
    </section>
  );
}

export default memo(Input);
