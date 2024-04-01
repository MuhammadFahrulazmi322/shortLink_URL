import React from "react";
import Button from "./Buttons";

function Result({ inputValue, result, onCopy, isCopied }) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-8 lg:p-8 gap-4">
      <h3 className="font-medium truncate">{inputValue}</h3>
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
        <a href={result} className="text-cyan font-medium">
          {result}
        </a>
        <Button
          label={isCopied ? "Copied!" : "Copy"}
          border={isCopied ? "bg-veryDarkViolet hover:bg-veryDarkViolet text-white rounded-md" : "rounded-md text-white px-14 py-4"}
          onClick={onCopy}
        />
      </div>
    </div>
  );
}

export default Result;
