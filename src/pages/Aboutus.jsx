/* images */
import lionCub from "/white lion.jpg";
import treePlanting from "/tree planting.png";
import heroSvg from "/hero pattern.png";
import safari from "/safari.jpg";
export default function Aboutus() {
  return (
    <div>
      {/* hero */}
      <div
        className="relative hero w-full h-screen bg-top  bg-no-repeat lg:bg-cover"
        style={{ backgroundImage: `url(${lionCub})` }}
      >
        <div className="absolute w-full h-full inset-0 bg-black/50 md:bg-black/30"></div>
        <div className="relative writeup w-full h-full z-20 flex flex-col justify-center px-4 md:px-8 lg:px-16">
          <h3 className="font-headline text-offwhite-50 headline_text">
            Wildlife matter
          </h3>
          <p className="text-white">
            Together, we can protect and preserve them from going extinct
          </p>
        </div>
      </div>
      {/* quote by Desmond Tutu */}
      <div className="p-4 md:w-8/12 text-center md:p-8 mx-auto lg:p-16">
        <h3 className="italic font-hero font-bold text-forestdeep-950 text-center">
          "Do your little bit of good where you are, it's those little bits put
          together that overwhelm the world."
        </h3>
        <h3 className="text-soildeep-950">~Arch Bishop Desmond Tutu~</h3>
      </div>
      {/* ABOUT */}
      <div className="p-4 bg-lightgreen-50 md:p-8 lg:p-16 ">
        <h3 className="text-soildeep-950 header_text">ABOUT LEVITATE AFRICA</h3>
        <p>
          levitate Africa is a non profit organization that create awareness
          about the dangers of poaching wildlife. We partner with like-minded
          organizations to preach, practice and support wildlife conservation
          and promote Eco restoration. <br />
          <br />
          We conduct programs and outreaches to tackle ecological threats like
          deforestation and poaching of wildlife by visiting rural areas to
          educate and empower people, we also plant trees in different locations
          to promote Afforestation. <br />
          <br />
          Levitate Africa strives to maintain a healthy ecosystem, in both rural
          and urban areas. For each place we visit, we go alongside seeds of
          different fruits, cashew, orange, avocado, mango etc. We don’t just
          plant trees, we plant fruits
        </p>
      </div>
      {/* tree planting */}
      <div className="relative pb-16 md:flex space-x-2">
        <div
          className="inset-0 absolute bg-repeat opacity-8 pointer-events-none"
          style={{ backgroundImage: `url(${heroSvg})` }}
        ></div>
        <div className="image md:w-7/12 z-10">
          <img src={treePlanting} alt="tree planting, afforestation" />
        </div>
        <div className="p-4 writeup md:p-8 lg:p-16 md:w-5/12">
          <h3 className="header_text text-forestdeep-950">
            We promote{" "}
            <span className="text-forestlight-900">afforestation</span>
          </h3>
          <p className="my-2">
            Over five hundred trees planted sporadically in both urban and rural
            areas, our goal is to plant over one million trees and more.
          </p>
          <button className="bg-forestlight-900 text-offwhite-50">
            Join us
          </button>
        </div>
      </div>
      {/* preserve wildlife */}
      <div className="preserve md:flex space-x-8">
        <div className="md:w-5/12">
          <h3 className="p-4 header_text text-soildeep-950 md:p-8 lg:p-16">
            We conserve wildlife and wild places
          </h3>
        </div>
        <div className="image md:w-7/12">
          <img src={safari} alt="" />
        </div>
      </div>
    </div>
  );
}
