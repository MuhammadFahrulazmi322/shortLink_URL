import React from "react";
import { illustrationWorking } from "../assets/images";
import Button from "../components/Buttons";

function Hero() {
  return (
    <section className="lg:px-12 pb-48 py-10 max-container overflow-hidden">
      <div className="px-4 lg:px-0 flex flex-col lg:flex-row-reverse items-center justify-center gap-4 lg:gap-8">
        <img
          className="relative translate-x-14 lg:translate-x-28 lg:w-[50%]"
          src={illustrationWorking}
          alt="illustrator"
          
        />
        <div className="flex flex-col gap-6 lg:items-start lg:w-[50%] ">
        <h1 className="text-4xl lg:text-[48px] xl:text-[68px] lg:leading-tight lg:font-extrabold text-center lg:text-left font-bold text-veryDarkBlue">More than just shorter links</h1>
        <p className="text-center lg:text-left text-lg text-grayishViolet font-medium">
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <Button label={"Get Started"}/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
