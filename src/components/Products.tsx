import Image from "next/image";
import ProductCard from "./shared/ProductCard";
import Title from "./shared/Title";

const Products = () => {
  return (
    <section className="relative my-6 flex w-full flex-col items-center py-10">
      <div className="absolute h-full w-full">
        <Image
          src="product-gradient.svg"
          alt="Product gradient"
          layout="responsive"
          width={100}
          height={100}
          className="pointer-events-none"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="max-w-[2000px] overflow-x-hidden">
          <Title
            title="Products"
            subtitle="Get started with one of our carefully crafted products & services."
          />

          {/* card Grids */}
          <div className="grid grid-cols-1 justify-items-center gap-10 pl-5 pr-3.5 lg:grid-cols-2">
            <ProductCard
              title="Buy"
              description="Explore and purchase your home from top developers & vetted property sellers (With land titles) on various purchase plans and long term loan options."
              buttonText="Find a Home to Buy"
              imageSrc="product1"
            />
            <ProductCard
              title="Short Lets"
              description="Find your next getaway spot, staycation, or business trip spot. Avoid extra charges, find detailed information, and reserve a short let."
              buttonText="Reserve a Short Let"
              imageSrc="product2"
              background="bg-[#F9F9F0]"
            />
            <ProductCard
              title="Invest"
              description="Become a real estate investor without breaking the bank. Invest in real estate assets and grow your portfolio with friends and family (in a private investment group) or with the public (fractionally, like a stock exchange)."
              buttonText="Find an Investment"
              buttonText2="Learn More"
              imageSrc="product3"
              background="bg-[#FFFFE8]"
              mode="vertical"
            />
            <ProductCard
              title="Sell"
              description="Sell your property with us, a company and partner you can trust. Our simple process makes it easy for sellers to list their properties and sell their properties on various purchase plans to the 1000’s of potential buyers who visit Giddaa monthly."
              buttonText="Sell Your Property"
              buttonText2="Talk To Our Team"
              imageSrc="product4"
              background="bg-[#F9FAFB]"
              mode="vertical"
            />
            <ProductCard
              title="Services"
              description="Explore and purchase homes from top developers & vetted property sellers (With land titles) on various purchase plans."
              buttonText="Find a Home to Buy"
              imageSrc="product5"
              background="bg-[#F5FDFF]"
            />
            <ProductCard
              title="Enterprise"
              description="We’ve built solutions & tools for property developers, and property managers specifically operating in the Nigerian Market - Our solutions fit like a glove."
              buttonText="Learn More"
              imageSrc="product6"
              background="bg-[#FFFDFA]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
