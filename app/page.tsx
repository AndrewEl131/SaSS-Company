import Image from "next/image";
import FeaturesMenu from "./HomeComponents/FeaturesMenu";
import ValueContainer from "./HomeComponents/ValueContainer";
import BlogMenu from "./HomeComponents/BlogMenu";
import Badge from "@/Components/Branch";

export default function Home() {
  return (
    <main>
      <div className="w-full md:min-h-484 min-h-1371 h-auto flex flex-col">
        {/* --------- Intro Section --------- */}
        <div className="w-full md:h-268.5 h-160.5 gradient-bg relative sm:flex sm:flex-col">
          <div className="md:mt-25 mt-18 flex flex-col md:gap-10 gap-8">
            <div>
              <h1 className="md:text-7xl text-3xl text-center flex flex-col secondary-font">
                Sustainability insights,{" "}
                <span className="primary-font">built for business</span>
              </h1>
            </div>
            <div>
              <p className="md:text-[19px] text-center">
                Track impact, reduce emissions, and accelerate progress—with
                clarity and confidence.
              </p>
            </div>
            <div className="flex justify-center md:flex-row flex-col md:items-start items-center gap-5">
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
          <div className="lg:w-240 lg:h-152 w-83.75 h-53 absolute bottom-0 left-1/2 transform -translate-x-1/2 hero-image"></div>
        </div>

        {/* --------- Features Section --------- */}
        <div className="w-full md:h-215.5 h-230 flex flex-col items-center md:gap-10 gap-6 md:py-30 py-10 appear">
          <h1 className="md:w-153 h-20 md:text-[40px] text-[23px] text-center font-medium primary-font leading-10">
            Everything you need to measure, model, and act on sustainability
          </h1>
          <div className="w-full md:h-125.5 h-175 flex md:justify-center md:flex-row flex-col md:px-0 px-5 md:gap-10 gap-6 md:pr-5">
            <div className="md:w-173.25 w-80 md:h-full h-auto min-h-51 content-image"></div>
            
            <div className="md:w-190 h-full border-t  border-gray-300">
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
                className="px-4 py-4 md:w-45 w-full h-11.5 mt-6 font-semibold bg-black text-white flex items-center md:justify-start justify-center gap-2 secondary-font"
                style={{ wordSpacing: "6px" }}
              >
                <div className="w-1 h-1 bg-white"></div>
                <h1>Explore features</h1>
              </button>
            </div>
          </div>
        </div>
        {/* -------- Values Section -------- */}
        <div className="w-full md:h-169.5 h-261.5 md:space-y-10 space-y-8 px-5 md:py-30 py-10 values-bg appear">
          <div className="w-full md:h-38 h-18 flex flex-col text-center md:leading-20.5">
            <h1 className="secondary-font font-normal md:text-[80px] text-[36px]">
              Built for clarity
            </h1>
            <h1 className="primary-font md:text-[80px] text-[36px]">Designed for action</h1>
          </div>
          <div className="w-full md:h-61.5 h-215.5 flex md:justify-center md:flex-row flex-col gap-4">
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
        <div className="w-full h-140 flex justify-center items-center appear">
          <div className="w-245 md:h-80 h-113.5 bg-[#F6F8FB] flex md:flex-row flex-col gap-10 rounded-2xl py-5 px-5">
            <Image
              src={"/assets/CaseImage.png"}
              width={498}
              height={280}
              alt="image"
              className="md:h-70 h-41.25"
            />
            <div className="w-full h-56.5">
              <div className="md:text-[20px] text-[18px] space-y-4">
                <h1 className="primary-font">Why Acme Inc chose Aetherfield</h1>
                <p className="secondary-font leading-[120%] tracking-[-4%]">
                  With fragmented data and growing reporting pressure, Acme
                  turned to Aetherfield to streamline their ESG workflows. The
                  result? Faster decisions, fewer spreadsheets, and 34% more
                  coverage.
                </p>
              </div>
              <button
                className="px-2 py-2 md:w-37 w-full h-9.5 mt-6 font-semibold bg-black text-white text-[14.5px] flex items-center justify-center"
                style={{ wordSpacing: "6px" }}
              >
                <h1>Read case study</h1>
              </button>
            </div>
          </div>
        </div>
        {/* Blog Section */}
        <div className="w-full md:h-142 h-266.75 flex flex-col items-center md:gap-10 gap-6 px-5 relative appear">
          <h1 className="md:w-153 w-full h-10 md:text-[40px] text-2xl text-center primary-font">
            From the journal
          </h1>

          <Badge />

          <div className="md:w-155 w-full md:h-126.5 h-254.75">
            <div className="w-full md:h-111 h-239.25 border-y border-gray-300">
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
              className="px-4 py-4 md:w-42 w-full h-9 mt-6 font-semibold secondary-font bg-black text-white flex items-center justify-center m-auto gap-2"
              style={{ wordSpacing: "6px" }}
            >
              View all articles
            </button>
          </div>
        </div>
        {/* Testimonial Section */}
        <div className="w-full md:h-235 h-177.25 px-5 md:py-30 py-10 md:space-y-0 space-y-4 appear">
          <div className="w-full md:h-175 h-157.25 flex md:justify-center md:flex-row flex-col md:gap-4 gap-8">
            <div className="md:w-153 w-full md:h-175 h-95.75 man-image"></div>
            <div className="md:w-153 w-full md:h-96 h-53.5 md:px-26.5 my-auto md:space-y-12 space-y-6">
              <Image
                src={"/icons/quote-left.svg"}
                width={30}
                height={30}
                alt="quote"
              />
              <h1 className="primary-font font-medium md:text-[40px] text-2xl leading-[100%] tracking-[-3%] md:w-145 w-full md:h-50 h-24">
                We finally moved past spreadsheets and guesswork. Now we have
                real data to guide real decisions.
              </h1>
              <div className="md:w-100.5 w-full h-13 md:space-y-1 space-y-2 text-[20px]">
                <h1 className="primary-font">Elliot Williams</h1>
                <h1 className="secondary-font text-gray-400">
                  Head of Sustainability, Flux Materials
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* Call to action */}
        <div className="w-full md:h-89.5 h-51.5 px-5 md:py-30 py-10 space-y-8 bg-[#F6F8FB] md:mt-0 mt-40 appear">
          <h1 className="primary-font text-center md:text-[40px] text-2xl leading-[100%] tracking-[-3%] font-medium">
            Ready to operationalize your sustainability goals?
          </h1>
          <button
            className="px-4 py-4 w-41 h-11.5 mt-6 font-semibold bg-black text-white flex items-center gap-2.5 m-auto">
            <div className="w-1 h-1 bg-white"></div>
            <h1>Request a demo</h1>
          </button>
        </div>
      </div>
    </main>
  );
}
