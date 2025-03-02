import Title from "./shared/Title";
import Image from "next/image";
import GreenButton from "./shared/GreenButton";

const GetStarted = () => {
  return (
    <section className="relative my-20 flex w-full flex-col items-center py-10">
      <div className="absolute h-full w-full">
        <Image
          src="product-gradient.svg"
          alt="Product gradient"
          layout="responsive"
          width={100}
          height={100}
          className="pointer-events-none -z-10"
        />
      </div>

      <div className="w-full max-w-[2000px] border border-transparent bg-yellow-linear lg:rounded-t-[250px]">
        <Title
          title="Get Started"
          subtitle="Made it this far? What are you waiting for? Get started with one of our products today!."
        />

        {/* Service Cards */}
        <div className="flex justify-center">
          <div className="mb-14 mt-8 grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 md:grid-cols-3">
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="relative z-30 flex max-w-[346px] flex-col justify-center gap-5 rounded-[16px] border-2 border-green-900 bg-white p-4"
                >
                  <Image
                    src={`/getStarted${index + 1}.svg`}
                    alt={`Get Started ${index + 1}`}
                    width={37}
                    height={26}
                  />
                  <h3 className="text-lg font-semibold">Stay Fully Booked</h3>
                  <p className="text-gray-600">
                    Order from our vendors and restaurants up till 12am
                  </p>
                  <GreenButton title="Get Started Now" mode="getStarted" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
