import { ArrowDown } from "lucide-react";
import Heading from "./heading";
import HeroCTA from "./hero-cta";
import ProfilePic from "./profile-pic";
import SocialIcons from "./social-icons";
import Subheading from "./subheading";

function Hero() {
  return (
    <section className="flex flex-col py-10 px-6 gap-y-10 md:grid md:grid-cols-2 md:container md:mx-auto md:px-14">
      <div className="flex flex-col items-center gap-y-10 md:items-start md:pr-10">
        <Subheading />
        <Heading />
        <HeroCTA />
        <SocialIcons />
      </div>
      <div className="flex flex-col items-center md:items-end md:pl-6">
        <ProfilePic />
      </div>
      <div className="hidden col-span-2 md:flex justify-center mt-18 cursor-pointer">
        <ArrowDown size={48} className="text-gray-600 animate-bounce" />
      </div>
    </section>
  );
}

export default Hero;
