import Image from "next/image";
import Title from "./shared/Title";

const KnowMoreAboutUs = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-10">
      <Title
        title="Know More About Us"
        subtitle="From our teams lips to your ears —  let’s tell you about Giddaa."
      />

      <div className="relative h-[200px] w-[80%] overflow-hidden lg:h-[600px]">
        <Image
          src="/KnowMore.png"
          alt="Testimonial Video"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default KnowMoreAboutUs;
