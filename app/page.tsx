import Image from "next/image";
import FeaturesMenu from "./HomeComponents/FeaturesMenu";
import ValueContainer from "./HomeComponents/ValueContainer";
import BlogMenu from "./HomeComponents/BlogMenu";
import Badge from "@/Components/Branch";

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
          <div className="w-full h-125.5 flex justify-center gap-10 pr-5">
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
        {/* -------- Values Section -------- */}
        <div className="w-full h-169.5 space-y-10 px-5 py-30 values-bg">
          <div className="w-full h-38 flex flex-col text-center leading-20.5">
            <h1 className="secondary-font font-normal text-[80px]">
              Built for clarity
            </h1>
            <h1 className="primary-font text-[80px]">Designed for action</h1>
          </div>
          <div className="w-full h-61.5 flex justify-center gap-4">
            <ValueContainer
              icon="/icons/Value.png"
              title="Clarity drives action"
              text="We believe better decisions start with better data—measured, visible, and trusted."
            />
            <ValueContainer
              icon="/icons/Value2.png"
              title="Sustainability is a systems problem"
              text="We build tools that help teams connect the dots between operations, impact, and accountability."
            />
            <ValueContainer
              icon="/icons/Value3.png"
              title="Progress over perfection"
              text="We support real-world momentum—helping organizations move from ambition to measurable change."
            />
          </div>
        </div>
        {/* --------- Case Study Section --------- */}
        <div className="w-full h-140 flex justify-center items-center">
          <div className="w-245 h-80 bg-[#F6F8FB] flex gap-10 rounded-2xl py-5 px-5">
            <Image
              src={"/assets/CaseImage.png"}
              width={498}
              height={280}
              alt="image"
            />
            <div className="w-full h-56.5">
              <div className="text-[20px] space-y-4">
                <h1 className="primary-font">Why Acme Inc chose Aetherfield</h1>
                <p className="secondary-font leading-[120%] tracking-[-4%]">
                  With fragmented data and growing reporting pressure, Acme
                  turned to Aetherfield to streamline their ESG workflows. The
                  result? Faster decisions, fewer spreadsheets, and 34% more
                  coverage.
                </p>
              </div>
              <button
                className="px-2 py-2 w-37 h-9.5 mt-6 font-semibold bg-black text-white text-[14.5px] flex items-center justify-center"
                style={{ wordSpacing: "6px" }}
              >
                <h1>Read case study</h1>
              </button>
            </div>
          </div>
        </div>
        {/* Blog Section */}
        <div className="w-full h-142 flex flex-col items-center gap-10 px-5 relative">
          <h1 className="w-153 h-10 text-[40px] text-center primary-font">
            From the journal
          </h1>

          <Badge />

          <div className="w-155 h-126.5">
            <div className="w-full h-111 border-y border-gray-300">
              <BlogMenu
                image="/assets/blog.png"
                title="How to Build a Climate-Ready Data Stack"
                insights={true}
                min="4"
                borders={false}
              />
              <BlogMenu
                image="/assets/blog1.png"
                title="Sustainability Isn’t a Side Project: Making Impact Operational"
                insights={false}
                min="7"
                borders={true}
              />
              <BlogMenu
                image="/assets/blog2.png"
                title="Inside the Aetherfield Model: How We Turn Data Into Action"
                insights={true}
                min="5"
                borders={false}
              />
            </div>
            <button
                className="px-4 py-4 w-42 h-9 mt-6 font-semibold secondary-font bg-black text-white flex items-center justify-center m-auto gap-2"
                style={{ wordSpacing: "6px" }}
              >
                View all articles
              </button>
          </div>
        </div>
      </div>
    </main>
  );
}
