import React, { memo, useState } from "react";
import Button from "../components/Buttons";
import Result from "../components/Result";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [copyIndex, setCopyIndex] = useState(null);
  const [alertInput, setAlertInput] = useState(false)
  const handleOnchange = (e) =>{
    setInputValue(e.target.value);
    if(e.target.value ===""){
      setAlertInput(true);
    }
    else{
      setAlertInput(false);
    }
  }
  const handleSubmit = async () => {
    const uri = encodeURIComponent(inputValue.toString());
    const url = "https://cleanuri.com";
    const shortenAPI = `${url}/api/v1/shorten`;
    if(uri!==""){
      try {
        const res = await fetch(shortenAPI, {
          method: "POST",
          mode:"no-cors",
          body: `url=${uri}`,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
  
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
  
        const dataJSON = await res.json();
        setData([...data, { input: inputValue, result: dataJSON.result_url }]);
        setInputValue("");
        
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    else{
      setAlertInput(!alertInput)
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
      <div className={`flex flex-col lg:flex-row p-8 lg:py-14  rounded-xl gap-4 bg-darkViolet 
          ${alertInput && "lg:pt-14 lg:pb-8"}
          bg-input-bg-mobile bg-right-top
          lg:bg-input-bg-desktop bg-no-repeat lg:object-contain lg:bg-center lg:first:bg-cover
       `}>
        <div className="flex flex-col lg:w-[80%] lg:text-lg gap-2">
        <input
          value={inputValue}
          type="text"
          className={`p-4 lg:py-4 lg:px-8 rounded-lg placeholder:text-grayishViolet ${alertInput && "border-red border-2"}`}
          placeholder="Shorten a link here..."
          onChange={handleOnchange }
        />
        {
          alertInput && (
            <p className="text-red italic">Please add a link</p>
          )
        }
        </div>
        <div className="flex flex-col">
        <Button label={"Shorten It!"} border={"rounded-lg text-white pt-5 pb-4"} onClick={handleSubmit} />
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
