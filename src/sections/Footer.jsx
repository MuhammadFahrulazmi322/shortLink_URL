import React from "react";
import { iconFacebook, iconInstagram, iconPinterest, iconTwitter} from "../assets/images";
import { LogoBrand } from "../assets/images/LogoBrand";

function Footer() {
  return (
    <section className="max-container py-14 bg-veryDarkViolet">
      <div className="flex flex-col items-center gap-8 text-center">
        <LogoBrand fill={"#fff"}/>
        <div className="flex flex-col gap-4 text-white">
          <p>Features</p>
          <div className="flex flex-col items-center gap-1">
            <a href="#" className="text-sm font-extralight">
              Link Shortening
            </a>
            <a href="#" className="text-sm font-extralight">
              Branded Links
            </a>
            <a href="#" className="text-sm font-extralight">
              Analytics
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-white">
          <p>Resources</p>
          <div className="flex flex-col items-center gap-1">
            <a href="#" className="text-sm font-extralight">
              Blog
            </a>
            <a href="#" className="text-sm font-extralight">
              Developers
            </a>
            <a href="#" className="text-sm font-extralight">
              Support
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-white">
          <p>Company</p>
          <div className="flex flex-col items-center gap-1">
            <a href="#" className="text-sm font-extralight">
              About
            </a>
            <a href="#" className="text-sm font-extralight">
              Our Team
            </a>
            <a href="#" className="text-sm font-extralight">
              Careers
            </a>
            <a href="#" className="text-sm font-extralight">
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-4">
            <img src={iconFacebook} alt="ic_fb" width={18} />
            <img src={iconTwitter} alt="ic_tw" width={18}/>
            <img src={iconPinterest} alt="ic_pt" width={18}/>
            <img src={iconInstagram} alt="ic_ig" width={18}/>



        </div>
      </div>
    </section>
  );
}

export default Footer;
