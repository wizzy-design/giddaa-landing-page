import Image from "next/image";
import GreenButton from "./GreenButton";

const ProductCard = ({
  title,
  description,
  buttonText,
  buttonText2,
  imageSrc,
  background,
  mode,
}: {
  title: string;
  description: string;
  buttonText: string;
  buttonText2?: string;
  imageSrc: string;
  background?: string;
  mode?: string;
}) => {
  return (
    <div
      className={`${
        mode == "vertical" ? "h-auto" : "h-fit"
      }  w-fit rounded-[40px] bg-green-linear py-1.5`}
    >
      <div
        className={`relative right-1 flex max-w-xl flex-col items-center justify-between overflow-hidden rounded-[40px] border border-gray-300 ${
          background ? background : "bg-white"
        } ${
          mode == "vertical" ? "flex flex-col md:flex-col h-auto" : " "
        } shadow-[0px_4px_4px_0px_#0000000D] md:flex-row`}
      >
        {/* Text Section */}
        <div
          className={`${
            mode == "vertical" ? "md:w-full px-5 py-8" : "md:w-1/2 p-4"
          } w-full flex-1  `}
        >
          <h2 className="mb-2 text-xl font-semibold text-gray-900">{title}</h2>
          <p className="mb-4 text-gray-600">{description}</p>
          <div className="flex items-center gap-4">
            <GreenButton title={buttonText} />
            {buttonText2 && <GreenButton title={buttonText} mode="white" />}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-2/3 min-h-[317px] w-full min-w-[285px] flex-1 p-0">
          <Image
            src={"/" + imageSrc + ".png"}
            alt={imageSrc + " Image"}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
