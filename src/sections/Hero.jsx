import React from "react";
import { illustrationWorking } from "../assets/images";
import Button from "../components/Buttons";
import Image from "next/image";

function Hero() {
  return (
    <section className="lg:px-12 pb-48 py-10 max-container overflow-hidden">
      <div className="px-4 lg:px-0 flex flex-col lg:flex-row-reverse items-center justify-center gap-4 lg:gap-8">
        <Image
          src={illustrationWorking}
          alt="illustrator"
          className="relative translate-x-20 -translate-y-10 lg:-translate-y-0 max-w-md lg:max-w-xl lg:translate-x-32 lg:w-[50%]"
        />
        <div className="flex flex-col gap-6 lg:items-start lg:w-[50%] items-center">
          <h1 className="text-4xl lg:text-[48px] xl:text-[68px] lg:leading-tight lg:font-extrabold text-center lg:text-left font-bold text-veryDarkBlue">
            More than just shorter links
          </h1>
          <p className="text-center lg:text-left text-lg text-grayishViolet font-medium">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <div className=" flex flex-col max-w-sm items-center">
            <Button label={"Get Started"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
