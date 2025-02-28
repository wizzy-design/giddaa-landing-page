import GreenButton from "./shared/GreenButton";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex justify-center px-4 py-8 md:px-6 lg:px-8">
      <div className="flex w-full max-w-[2000px] flex-col items-center gap-8">
        <div className="flex w-fit items-center rounded-100 border border-solid border-[#F0F0F0] bg-hero-linear px-4 py-3 text-xs font-bold">
          <p className="flex h-[29px] items-center border-r border-solid border-[#D9D9D9] bg-green-linear bg-clip-text pr-2 text-center capitalize text-transparent">
            We Serve Nigerians Across the Globe
          </p>
          <p className="flex h-[29px] items-center pl-2 text-center">
            <span className="pb-1 text-base">👀</span>
            <span className="bg-green-linear bg-clip-text pl-1 text-transparent">
              10,000 PEOPLE HAVE SEEN THIS
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h1 className="w-[90%] text-center text-3xl font-bold leading-[40px] lg:text-[3rem] lg:leading-[68px]">
            Find a Home to Buy In Nigeria On Various{" "}
            <span className="text-[#0A7E32]">Purchase Plans</span>.
          </h1>

          <p className="w-[90%] text-center leading-[36px] lg:w-[60%]">
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
        <div className="grid grid-cols-2 gap-2 lg:flex lg:items-center">
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        recusandae maiores illum perspiciatis doloremque? Ab nobis ullam
        temporibus neque voluptates omnis in porro velit, fuga blanditiis. Non
        veritatis quos dolore incidunt vero quibusdam deleniti reprehenderit
        explicabo ad. Necessitatibus, quia vero? Corrupti totam mollitia nihil
        perferendis consectetur eos sunt, labore exercitationem, nulla, eaque
        quas facilis blanditiis veniam veritatis eveniet. Consequatur laboriosam
        iure error molestiae quos. Sunt, necessitatibus aperiam adipisci nostrum
        enim laudantium, est quia delectus obcaecati deleniti exercitationem
        quod temporibus. Eos, dolor neque! Consequatur natus sint odit
        voluptatibus, voluptatum explicabo repellendus ipsum eos modi
        perspiciatis? Vitae, temporibus? Exercitationem necessitatibus ex
        impedit, repudiandae assumenda commodi ab facilis quis recusandae enim
        rerum nihil eligendi voluptatibus, illum ipsa dolores provident
        voluptatum atque velit sint fuga aliquid numquam. Explicabo praesentium
        natus, tenetur ducimus veniam nostrum blanditiis iste modi incidunt
        quisquam cum repudiandae laboriosam dolorem asperiores, quia placeat
        excepturi obcaecati qui voluptas corrupti culpa consectetur perspiciatis
        porro. Tempora nulla assumenda porro ad ex perspiciatis nisi, sequi
        quas, velit ratione nesciunt vero reiciendis explicabo impedit doloribus
        alias cumque molestiae voluptas labore! Aliquam ex perferendis sunt
        magni minima, doloremque obcaecati reiciendis ab ducimus corrupti sint
        adipisci voluptates odio veritatis debitis, minus similique, aut neque?
        Vel consequuntur ipsum reiciendis iusto harum voluptas modi repudiandae
        porro corrupti et laudantium sit quisquam suscipit, minus nobis dolorem
        alias ut inventore laboriosam quasi? Cupiditate, nisi neque! Aliquam
        ipsa obcaecati laboriosam dolorum modi eligendi exercitationem delectus
        cum eveniet labore? At, minima incidunt suscipit ratione odio earum iure
        facere doloribus iste, mollitia consequatur asperiores voluptas harum.
        Deleniti ullam error, libero consequatur explicabo et ratione expedita
        blanditiis facilis delectus ut quo maiores vero nam dolorem praesentium!
        Suscipit tenetur modi non sapiente, magni possimus repellendus quas
        architecto, autem perferendis vitae animi illo saepe placeat natus
        dolorem enim. Eos commodi quam excepturi? Esse ipsam laborum ad iusto
        fuga aut quis similique impedit provident delectus earum magnam,
        voluptatem architecto recusandae blanditiis rerum amet ipsa magni
        soluta! Obcaecati quisquam tempore accusantium eligendi dolorum sapiente
        aperiam! Nesciunt ullam sequi alias cum ipsum eius fugit repudiandae quo
        molestias impedit! Necessitatibus, mollitia atque. Libero a quia in
        ullam nihil praesentium maxime ab esse. Magnam quod quasi, veniam fugit
        possimus sit laboriosam culpa earum mollitia rerum fugiat in libero non
        ipsa ullam a? Nam doloribus quos ea maiores esse, debitis nesciunt natus
        obcaecati accusantium, accusamus voluptates culpa sapiente quas
        similique aut? Id magnam pariatur consequatur accusamus suscipit laborum
        cum! Tempore reprehenderit esse saepe, eveniet nobis quam! Enim iusto
        sit voluptates quia unde, atque illo assumenda nulla fuga possimus fugit
        consectetur optio maxime et quibusdam, doloribus iste ratione nihil id
        magnam tenetur quas dolorem! Laudantium rerum quam delectus totam aut
        reprehenderit ratione, fugiat eos quia accusantium rem provident nihil
        eum beatae optio doloribus alias dolorem earum animi? Aperiam modi totam
        fugiat tempora unde sapiente saepe placeat magni distinctio quia,
        accusantium voluptas maxime aliquid ab voluptates quisquam quasi. Alias
        nulla nemo velit, itaque, sapiente aliquid necessitatibus error maxime
        dolorem culpa quam. Tempora quasi molestias repellendus fuga perferendis
        necessitatibus distinctio consequuntur. Quisquam porro enim iure maxime
        rem.
      </div>
    </section>
  );
};

export default Hero;
