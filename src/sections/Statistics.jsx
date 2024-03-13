import React from "react";
import {
  iconBrandRecognation,
  iconDetailRecords,
  iconFullyCustom,
} from "../assets/images";

function Statistics() {
  return (
    <section className="max-container pb-20">
      <div className="flex flex-col items-center px-4 gap-12">
        <div className="flex flex-col items-center gap-4 px-4 py-2">
          <h2 className="text-2xl font-bold text-veryDarkBlue">
            Advanced Statistics
          </h2>
          <p className="text-center text-grayishViolet font-medium">
            Track how your links are peforming across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 px-4">
          <div className="rounded-full bg-darkViolet p-4">
            <img src={iconBrandRecognation} alt="" />
          </div>
          <h2 className="text-xl font-bold text-veryDarkBlue">
            Brand Recognition
          </h2>
          <p className="text-center text-grayishViolet font-medium">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 px-4">
          <div className="flex flex-col items-center">
            <div className="bg-cyan p-1 h-10 w-1"></div>

            <div className="rounded-full bg-darkViolet p-4">
              <img src={iconDetailRecords} alt="" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-veryDarkBlue">
            Detailed Records
          </h2>
          <p className="text-center text-grayishViolet font-medium">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 px-4">
        <div className="flex flex-col items-center">
            <div className="bg-cyan p-1 h-10 w-1"></div>

            <div className="rounded-full bg-darkViolet p-4">
              <img src={iconFullyCustom} alt="" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-veryDarkBlue">
            Fully Customizable
          </h2>
          <p className="text-center text-grayishViolet font-medium">
            improve brand awarness and content discoverability through
            customizable links. supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
