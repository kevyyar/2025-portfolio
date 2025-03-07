import { devIcons } from "@/utils/icons";
import Image from "next/image";

function Expertise() {
  return (
    <section
      id="skills"
      className="flex flex-col my-18 px-6 gap-y-10 md:container md:mx-auto md:px-14 py-10"
    >
      <div className="text-center md:text-left">
        <h2 className="text-5xl font-black">My Skills</h2>
        <p className="mt-4 text-gray-500 md:text-xl">
          The tools and technologies I use:
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4 md:gap-12 max-w-md md:max-w-3xl">
          {devIcons.map((icon) => (
            <div key={icon.name} className="flex justify-center items-center">
              <Image
                src={icon.iconUrl}
                width={60}
                height={60}
                alt={icon.name}
                className="object-contain md:w-[100px] md:h-[100px]" 
                sizes="(max-width: 768px) 60px, 100px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;