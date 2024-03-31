import React from "react";
import {
  iconFacebook,
  iconInstagram,
  iconPinterest,
  iconTwitter,
} from "../assets/images";
import { LogoBrand } from "../assets/images/LogoBrand";
import Image from "next/image";

function Footer() {
  console.log("Rerender! Footer");

  return (
    <section className="max-container py-14 bg-veryDarkViolet lg:px-12 ">
      <div className="flex flex-col lg:flex-row items-center lg:items-start  gap-8 lg:gap-20 xl:gap-32 text-center">
        <div className="xl:mr-20">
          <LogoBrand fill={"#fff"} />
        </div>
        <div className="flex flex-col lg:items-start gap-4 text-white">
          <p className="text-white">Features</p>
          <div className="flex flex-col lg:items-start items-center gap-1">
            <a
              href="#"
              className="text-sm font-extralight  text-white hover:text-cyan"
            >
              Link Shortening
            </a>
            <a
              href="#"
              className="text-sm font-extralight  text-white hover:text-cyan"
            >
              Branded Links
            </a>
            <a
              href="#"
              className="text-sm font-extralight  text-white hover:text-cyan"
            >
              Analytics
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-white">
          <p className="text-white">Resources</p>
          <div className="flex flex-col lg:items-start items-center gap-1">
            <a
              href="#"
              className="text-sm font-extralight  text-white hover:text-cyan"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-sm font-extralight  text-white hover:text-cyan"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-sm font-extralight  text-white hover:text-cyan"
            >
              Support
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 ">
          <p className="text-white">Company</p>
          <div className="flex flex-col lg:items-start items-center gap-1">
            <a
              href="#"
              className="text-sm font-extralight text-white hover:text-cyan"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm font-extralight text-white hover:text-cyan"
            >
              Our Team
            </a>
            <a
              href="#"
              className="text-sm font-extralight text-white hover:text-cyan"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-sm font-extralight text-white hover:text-cyan"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <a href="">
            <Image src={iconFacebook} alt="ic_fb" width={18} />
          </a>
          <a href="">
            <Image src={iconTwitter} alt="ic_tw" width={18} />
          </a>
          <a href="">
            <Image src={iconPinterest} alt="ic_pt" width={18} />
          </a>
          <a href="">
            <Image src={iconInstagram} alt="ic_ig" width={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
