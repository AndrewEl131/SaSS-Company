import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-full min-h-484 flex flex-col">
        {/* --------- Intro Section --------- */}
        <div className="w-full h-[1074px] border-2 gradient-bg relative">
          <div className="mt-25 flex flex-col gap-10">
            <div>
              <h1 className="text-7xl text-center flex flex-col secondary-font">Sustainability insights, <span className="primary-font">built for business</span></h1>
            </div>
            <div>
              <p className="text-[19px] text-center">Track impact, reduce emissions, and accelerate progress—with clarity and confidence.</p>
            </div>
            <div className="flex justify-center gap-5">
              <button className="px-4 py-4 w-45 h-11.5 font-semibold bg-black text-white flex items-center gap-2" style={{wordSpacing: "6px"}}>
                <div className="w-1 h-1 bg-white"></div>
                <h1>Request a demo</h1>
              </button>

              <button className="px-4 py-4 w-52 h-11.5 font-semibold bg-black text-white flex items-center gap-2" style={{wordSpacing: "6px"}}>
                <div className="w-1 h-1 bg-white"></div>
                <h1>Explore the platform</h1>
              </button>
            </div>
          </div>
          <div className="w-[960px] h-[608px] absolute bottom-0 left-1/2 transform -translate-x-1/2 hero-image"></div>
        </div>
      </div>
    </main>
  );
}
