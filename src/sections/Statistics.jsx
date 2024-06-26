import React from "react";
import {
  iconBrandRecognation,
  iconDetailRecords,
  iconFullyCustom,
} from "../assets/images";
import Image from "next/image";

function Statistics() {
  return (
    <section className="max-container lg:px-12 pb-20 lg:pb-0">
      <div className="flex flex-col items-center gap-4 px-4 pb-28">
        <h2 className="text-2xl lg:text-4xl font-bold text-veryDarkBlue">
          Advanced Statistics
        </h2>
        <p className="text-center text-grayishViolet font-medium lg:max-w-md">
          Track how your links are peforming across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center px-4 lg:px-8 gap-20 lg:gap-0 lg:pb-48 ">
        {/* Brand Recognition */}
        <div className="flex flex-col bg-white items-center lg:items-start gap-4 px-4 rounded-lg lg:relative lg:-translate-y-4">
          <div className="rounded-full bg-darkViolet p-4 lg:relative lg:-translate-y-10 -translate-y-10">
            <Image src={iconBrandRecognation} alt="" />
          </div>
          <div className="lg:relative lg:-translate-y-8 -translate-y-8 flex flex-col gap-4 items-center">
            <h2 className="text-xl font-bold text-veryDarkBlue">
              Brand Recognition
            </h2>
            <p className="text-center lg:text-left text-grayishViolet font-medium">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>

        <div className="bg-cyan p-1 h-1 w-20 lg:block hidden"></div>

        {/* Detail Records */}
        <div className="flex flex-col bg-white items-center lg:items-start gap-4 px-4 rounded-lg lg:relative lg:translate-y-4">
          <div className="flex flex-col items-center lg:relative lg:-translate-y-10 -translate-y-20">
            <div className="bg-cyan p-1 h-10 w-1 lg:hidden max-md:block"></div>
            <div className="rounded-full bg-darkViolet p-4">
              <Image src={iconDetailRecords} alt="" />
            </div>
          </div>
          <div className="lg:relative lg:-translate-y-8 -translate-y-20 flex flex-col gap-4 items-center">
            <h2 className="text-xl font-bold text-veryDarkBlue">
              Detailed Records
            </h2>
            <p className="text-center lg:text-left text-grayishViolet font-medium">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <div className="bg-cyan p-1 h-1 w-20 lg:block hidden"></div>

        {/* Fully Customizable */}
        <div className="flex flex-col bg-white items-center lg:items-start gap-4 px-4 lg:relative lg:translate-y-12 -translate-y-0 rounded-lg">
          <div className="flex flex-col items-center lg:relative lg:-translate-y-10 -translate-y-20">
            <div className="bg-cyan p-1 h-10 w-1 lg:hidden max-md:block"></div>

            <div className="rounded-full bg-darkViolet p-4">
              <Image src={iconFullyCustom} alt="" />
            </div>
          </div>
          <div className="lg:relative lg:-translate-y-8 -translate-y-20 flex flex-col gap-4 items-center">
            <h2 className="text-xl font-bold text-veryDarkBlue">
              Fully Customizable
            </h2>
            <p className="text-center lg:text-left text-grayishViolet font-medium">
              improve brand awarness and content discoverability through
              customizable links. supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
