import Heading from "./heading";
import HeroCTA from "./hero-cta";
import ProfilePic from "./profile-pic";
import Subheading from "./subheading";

function Hero() {
  return (
    <section className="flex flex-col items-center py-10 px-6 gap-y-10">
      <Subheading />
      <Heading />
      <HeroCTA />
      <div>
        <ProfilePic />
      </div>
    </section>
  );
}

export default Hero;
