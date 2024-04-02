import React from "react";
import Button from "./Buttons";

function Result({ inputValue, result, onCopy, isCopied }) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-4 lg:py-4 lg:px-6 my-2 px-4 gap-4 bg-white rounded-lg">
      <h3 className="font-medium truncate border-b-2 py-4 lg:py-0 border-grayCollection-200 lg:border-none">
        {inputValue}
      </h3>
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
        <a href={result} className="text-cyan font-medium">
          {result}
        </a>
        <Button
          label={isCopied ? "Copied!" : "Copy"}
          border={
            isCopied
              ? "bg-darkViolet text-white rounded-md px-6 py-[8px] text-md"
              : "rounded-md text-white px-8 py-[8px] text-md"
          }
          onClick={onCopy}
        />
      </div>
    </div>
  );
}

export default Result;
