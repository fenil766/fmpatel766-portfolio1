import characterImage from "../../../assets/images/3d-character.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="pt-24! relative min-h-screen flex items-center w-full overflow-hidden bg-black"
    >
      {/* Decorative gradient circle on the right */}
      {/* <div className="absolute top-0 right-0 w-64 h-full bg-[#B3CB3C] clip-path-custom"></div> */}

      {/* "HIRE ME" text on the right edge */}
      {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 transform rotate-90 origin-center">
        <span className="text-[#1a0d0a] font-bold text-2xl tracking-[0.3em] whitespace-nowrap">
          HIRE ME
        </span>
      </div> */}

      <div className="max-w-full mx-14! w-full px-6! sm:px-12! lg:px-18!">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Side - Character Image */}
          <div className="flex justify-center lg:justify-start relative">
            <div className="relative">
              {/* Background gradient circle */}
              <div className="absolute inset-0 bg-linear-to-br from-[#B3CB3C]/10 to-transparent rounded-full blur-2xl scale-110"></div>

              {/* Character image */}
              <div className="relative z-10">
                <img
                  src={characterImage}
                  className="w-full max-w-xs lg:max-w-md"
                  alt="3D character illustration"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col items-start gap-4">
            {/* Available for work badge */}
            <div className="flex items-center gap-3 mb-2! border border-white/20 bg-white/10 backdrop-blur-md rounded-4xl max-w-full w-fit px-6! py-4!">
              <div className="relative w-4 h-4 flex items-center justify-center">
                <div className="absolute w-4 h-4 rounded-full bg-[#B3CB3C]/50 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-[#B3CB3C] animate-pulse"></div>
              </div>
              <span className="text-sm text-white font-medium">
                Available For Work
              </span>
            </div>



            <div className="flex flex-col items-start! mb-3!">
              {/* Main heading */}
              <h1 className="text-7xl lg:text-8xl xl:text-9xl font-medium mb-4 text-white leading-none tracking-widest">
                FENIL
              </h1>

              {/* Subheading */}
              <p className="text-lg lg:text-xl text-gray-300 font-normal">
                UI/UX DESIGNER & FRONTEND DEVELOPER
              </p>
            </div>

            {/* Description */}
            <div className="border-l-2 border-[#B3CB3C] pl-6!">
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed font-sans">
                <span className="font-semibold text-white font-(family-name:--font-primary)">FENIL PATEL</span> -
                I specialize in crafting intuitive user experiences and scalable
                frontend solutions, bridging thoughtful design systems with
                efficient, high-performance web applications.
              </p>
            </div>
          </div>
        </div>

        {/* Stats card at the bottom */}
        <div className="w-full">
          <div className="bg-white/10 backdrop-blur-md border border-[#B3CB3C]/20 rounded-2xl p-6 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-10! px-10!">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  1+
                </div>
                <div className="text-xs lg:text-sm text-gray-400">
                  Year Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  5+
                </div>
                <div className="text-xs lg:text-sm text-gray-400">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  15+
                </div>
                <div className="text-xs lg:text-sm text-gray-400">
                  Completed Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  5+
                </div>
                <div className="text-xs lg:text-sm text-gray-400">
                  Achievement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        .clip-path-custom {
          clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
        }
      `}</style> */}
    </section>
  );
}
