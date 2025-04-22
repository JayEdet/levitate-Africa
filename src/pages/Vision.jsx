import womanElephant from "/elephant smiling.jpg";
import mammoth from "/mammoth.jpg";
import heroSvg from "/hero pattern.png";
import macque from "/macque monkey.jpg";
const Vision = () => {
  return (
    <div>
      <div className="relative bg-center bg-no-repeat object-fit hero w-full h-screen">
        <img
          src={womanElephant}
          className="w-full h-full object-cover absolute inset-0"
          alt="happy elephant"
        />
        <div className="px-4 writeup absolute w-full h-full flex items-center bg-black/50 md:px-8 lg:px-16">
          <h3 className="text-offwhite-50 font-headline headline_text md:w-8/12">
            We dream of modern Africa where humans coexist happily with wildlife
          </h3>
        </div>
      </div>
      <div className="w-full bg-subtlegreen-100 p-4 md:p-8 lg:px-16 flex justify-center">
        <p className="text-center text-soildeep-950 font-hero md:w-8/12">
          Our <span className="text-forestlight-900 font-bold">vision</span> is
          of an Africa where sustainable development includes thriving wildlife
          and wild lands as a cultural and economic asset for Africa’s future
          generations.
        </p>
      </div>
      {/* loss of species */}
      <div className=" md:flex space-x-8 py-8">
        <div className="relative p-4 md:flex order-2 md:w-5/12 md:p-8 lg:p-16">
          <div
            className="inset-0 absolute opacity-10"
            style={{ backgroundImage: `url(${heroSvg})` }}
          ></div>
          <h3 className="z-20">
            The world has lost thousands of species to habitat destruction,
            climate change, poaching, and pollution
          </h3>
        </div>
        <div className="md:w-7/12 md:order-1 h-94 overflow-hidden">
          <img
            src={mammoth}
            className="w-full h-full hover:scale-105 transition duration-300"
            alt="wooly mammoth extinct animal"
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;
