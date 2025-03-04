import Image from "next/image";

const Title: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <section className="mb-10 mt-12 flex flex-col items-center gap-5 lg:mt-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-2 bg-green-linear bg-clip-text text-center font-millik text-2xl font-medium text-transparent lg:text-4xl">
          {title}
        </h1>
        <Image src="/greenLine.svg" alt="Green Line" width={92} height={1} />
      </div>
      <p className="w-2/3 text-center text-sm lg:text-base">{subtitle}</p>
    </section>
  );
};

export default Title;
