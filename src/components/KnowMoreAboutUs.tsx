import Image from "next/image";
import Title from "./shared/Title";

const KnowMoreAboutUs = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-10">
      <Title
        title="Know More About Us"
        subtitle="From our teams lips to your ears —  let’s tell you about Giddaa."
      />

      <div className="relative h-[600px] w-[80%]">
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
