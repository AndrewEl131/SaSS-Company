import Image from "next/image";
import FeaturesMenu from "./HomeComponents/FeaturesMenu";

export default function Home() {
  return (
    <main>
      <div className="w-full min-h-484 flex flex-col">
        {/* --------- Intro Section --------- */}
        <div className="w-full h-[1074px] gradient-bg relative">
          <div className="mt-25 flex flex-col gap-10">
            <div>
              <h1 className="text-7xl text-center flex flex-col secondary-font">
                Sustainability insights,{" "}
                <span className="primary-font">built for business</span>
              </h1>
            </div>
            <div>
              <p className="text-[19px] text-center">
                Track impact, reduce emissions, and accelerate progress—with
                clarity and confidence.
              </p>
            </div>
            <div className="flex justify-center gap-5">
              <button
                className="px-4 py-4 w-45 h-11.5 font-semibold bg-black text-white flex items-center gap-2"
                style={{ wordSpacing: "6px" }}
              >
                <div className="w-1 h-1 bg-white"></div>
                <h1>Request a demo</h1>
              </button>

              <button
                className="px-4 py-4 w-52 h-11.5 font-semibold bg-black text-white flex items-center gap-2"
                style={{ wordSpacing: "6px" }}
              >
                <div className="w-1 h-1 bg-white"></div>
                <h1>Explore the platform</h1>
              </button>
            </div>
          </div>
          <div className="w-[960px] h-[608px] absolute bottom-0 left-1/2 transform -translate-x-1/2 hero-image"></div>
        </div>

        {/* --------- Features Section --------- */}
        <div className="w-full h-[862px] flex flex-col items-center gap-10 py-30">
          <h1 className="w-153 h-20 text-[40px] text-center font-medium primary-font leading-10">
            Everything you need to measure, model, and act on sustainability
          </h1>
          <div className="w-full h-125.5 flex justify-center gap-10 pr-10">
            <div className="w-173.25 h-full content-image"></div>
            <div className="w-190 h-full border-t border-gray-300 ">
              <FeaturesMenu
                title="Track"
                number="001"
                paragraph="Emissions, energy, and waste across your value chain"
              />
              <FeaturesMenu
                title="Model"
                number="002"
                paragraph="Forecast performance and goal alignment"
              />
              <FeaturesMenu
                title="Report"
                number="003"
                paragraph="Generate ESG disclosures, automate frameworks"
              />
              <FeaturesMenu
                title="Act"
                number="004"
                paragraph="Surface insights and operational next steps"
              />

              <button
                className="px-4 py-4 w-42 h-11.5 mt-6 font-semibold bg-black text-white flex items-center gap-2"
                style={{ wordSpacing: "6px" }}
              >
                <div className="w-1 h-1 bg-white"></div>
                <h1>Explore features</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
