import GreenButton from "./shared/GreenButton";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex justify-center px-4 py-8 lg:px-8">
      <div className="flex w-full max-w-[2000px] flex-col items-center gap-8">
        <div className="flex w-fit items-center rounded-100 border border-solid border-[#F0F0F0] bg-hero-linear px-4 py-3 text-xs font-bold">
          <p className="flex h-[29px] items-center border-r border-solid border-[#D9D9D9] bg-green-linear bg-clip-text pr-2 capitalize text-transparent">
            We Serve Nigerians Across the Globe
          </p>
          <p className="flex h-[29px] items-center pl-2">
            <span className="pb-1 text-base">👀</span>
            <span className="bg-green-linear bg-clip-text pl-1 text-transparent">
              10,000 PEOPLE HAVE SEEN THIS
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <h1 className="w-2/3 text-center text-2xl font-bold leading-[68px] lg:text-[3rem]">
            Find a Home to Buy In Nigeria On Various{" "}
            <span className="text-[#0A7E32]">Purchase Plans</span>.
          </h1>

          <p className="w-2/3 text-center leading-[36px] lg:w-[60%]">
            We have taken real estate beyond{" "}
            <span className="underline underline-offset-4">mere listings</span>.
            Conduct secure real estate transactions on our platform trusted by
            more than{" "}
            <span className="font-bold">
              4,000 customers, and 30+ companies
            </span>
          </p>
        </div>

        <GreenButton title="Explore Our Products" mode="hero" />

        <div className="flex items-center">
          <Image
            src="/hero1.png"
            alt="Hero Image illustration"
            width={449}
            height={286}
          />
          <Image
            src="/hero2.png"
            alt="Hero Image illustration"
            width={449}
            height={286}
          />
          <Image
            src="/hero3.png"
            alt="Hero Image illustration"
            width={257}
            height={286}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
