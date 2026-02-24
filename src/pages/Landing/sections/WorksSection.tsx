import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import workCardTemplate from "../../../assets/images/work-card-temp.jpg";
import spark from "../../../assets/images/sparkThumbnil.jpeg";
import freshNest from "../../../assets/images/fresNestThumbnil.jpeg";
import laundry from "../../../assets/images/laundryThumbnil.jpeg";
import hotel from "../../../assets/images/hotelThumbnil.jpeg";

export default function WorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // 5 dummy works + 1 "Show More" card
  const works = [
    {
      id: 1,
      title: "Spark Event Management",
      description:
        "Designed a sophisticated event management website for Spark, combining intuitive navigation, refined visuals, and a seamless digital experience.",
      image: spark,
      link: "https://www.figma.com/proto/9SJR5cQJskLVf5U1C0BhGA/Portfoio-Showcase?node-id=1-133&t=VqdS9mOVKXAHkhLY-1",
      isShowMore: false,
    },
    {
      id: 2,
      title: "Fresh Nest",
      description:
        "Designed a clean and user-friendly website for Fresh Nest cleaning services, ensuring intuitive navigation and a seamless browsing experience",
      image: freshNest,
      link: "https://www.figma.com/proto/9SJR5cQJskLVf5U1C0BhGA/Portfolio-Showcase?node-id=1-1234&t=VqdS9mOVKXAHkhLY-1",
      isShowMore: false,
    },
    {
      id: 3,
      title: "Laundry App",
      description:
        "Designed the user interface for a Laundry Service mobile application, creating detailed user workflows, wireframes, and a structured sitemap to ensure smooth booking, order tracking, and seamless user experience.",
      image: laundry,
      link: "https://www.figma.com/board/9W20EnjrgUhcBEY3QMiF0R/Laundry-App?node-id=0-1&t=UbqtGGbRcqwJyEoO-1",
      isShowMore: false,
    },
    {
      id: 4,
      title: "Hotel Management",
      description:
        "Designed a visually appealing and user-friendly landing page for a Hotel Booking platform, focusing on intuitive navigation, clear call-to-action sections, and seamless room discovery experience.",
      image: hotel,
      link: "https://www.figma.com/proto/9SJR5cQJskLVf5U1C0BhGA/Portfolio-Showcase?node-id=34-842&p=f&viewport=423%2C40%2C0.15&t=BTWoKKx0JLXwbD9B-1&scaling=min-zoom&content-scaling=fixed&page-id=34%3A841",
      isShowMore: false,
    },
    // {
    //   id: 5,
    //   title: "GatherGo Management 5",
    //   description:
    //     "Designed user interface for GatherGo's event management company website with intuitive navigation, elegant visuals, and seamless experience.",
    //   image: workCardTemplate,
    //   link: "https://www.behance.net/portfolio/editor/project/181530663",
    //   isShowMore: false,
    // },
    {
      id: 5,
      title: "Show More",
      description: "Explore all of my works and projects",
      image: null,
      link: "https://www.behance.net/patelfenil11",
      isShowMore: true,
    },
  ];

  const handlePrev = () => {
    if (currentIndex > 0) {
      // setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    const maxIndex = works.length - 3;
    if (currentIndex < maxIndex) {
      // setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleWorkClick = (link: string | undefined) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const handleShowMore = (link: string | undefined) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      navigate("#works");
    }
  };

  // Get 3 cards to display based on current index
  const displayedWorks = works.slice(currentIndex, currentIndex + 3);

  // Determine button visibility
  const showLeftButton = currentIndex > 0;
  const showRightButton = currentIndex < works.length - 3;

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="works"
      ref={ref}
      className="py-16! lg:py-24! px-4! sm:px-6! lg:px-8! relative"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="w-full mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10! lg:mb-16!"
          variants={containerVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4! text-white font-(family-name:--font-primary)">
            WORKS
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {displayedWorks.map((work) => (
              <div key={work.id} className="h-full">
                {work.isShowMore ? (
                  // Show More Card
                  <motion.div
                    className="relative h-full rounded-2xl overflow-hidden border border-transparent"
                    whileHover={{
                      scale: 1.02,
                      borderColor: "#B3CB3C",
                      boxShadow: "0 0 30px rgba(179, 203, 60, 0.5)"
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-[#B3CB3C]/20 to-[#B3CB3C]/5 backdrop-blur-md" />

                    <div className="relative z-10 h-full flex flex-col items-center justify-center p-8! text-center min-h-100">
                      <div className="text-6xl mb-4!">→</div>
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                        {work.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base mb-6!">
                        {work.description}
                      </p>
                      <motion.button
                        className="text-[#B3CB3C] font-(family-name:--font-primary) text-sm hover:text-[#F25912] transition duration-300 cursor-pointer"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => {
                          handleShowMore(work.link);
                        }}
                      >
                        <span className="font-(family-name:--font-primary)">Read More →</span>
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  // Regular Work Card
                  <motion.div
                    className="relative h-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-transparent"
                    whileHover={{
                      scale: 1.02,
                      borderColor: "#B3CB3C",
                      boxShadow: "0 0 30px rgba(179, 203, 60, 0.5)"
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    {/* Image Container */}
                    <div className="h-56 md:h-64 lg:h-72 flex items-center justify-center overflow-hidden relative">
                      <img
                        src={work.image || workCardTemplate}
                        alt={work.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6! lg:p-8!">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-3! font-(family-name:--font-primary)">
                        {work.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base mb-6! leading-relaxed line-clamp-3 font-sans!">
                        {work.description}
                      </p>
                      <motion.button
                        className="text-[#B3CB3C]  font-(family-name:--font-primary) text-sm hover:text-[#F25912] transition duration-300 cursor-pointer"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => {
                          handleWorkClick(work.link);
                        }}
                      >
                        <span className="font-(family-name:--font-primary)">Read More →</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-12!">
            <AnimatePresence>
              {/* {showLeftButton && ( */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  boxShadow: [
                    "0 0 0px rgba(179, 203, 60, 0)",
                    "0 0 20px rgba(179, 203, 60, 0.6)",
                    "0 0 0px rgba(179, 203, 60, 0)"
                  ]
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={
                  showLeftButton
                    ? { scale: 1.1, backgroundColor: "#B3CB3C" }
                    : {}
                }
                whileTap={showLeftButton ? { scale: 0.95 } : {}}
                onClick={showLeftButton ? handlePrev : undefined}
                tabIndex={showLeftButton ? 0 : -1}
                aria-disabled={!showLeftButton}
                className={`p-3! rounded-full text-white transition duration-300 backdrop-blur-md ${showLeftButton
                  ? "visible pointer-events-auto hover:bg-[#B3CB3C] hover:text-black"
                  : "invisible pointer-events-none"
                  }`}
                aria-label="Previous works"
              >
                <ChevronLeft size={24} />
              </motion.button>

              {/* )} */}
            </AnimatePresence>

            <div className="flex gap-2">
              {Array.from({ length: works.length - 2 }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    // setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                    ? "bg-[#B3CB3C] w-8"
                    : "bg-white/30 hover:bg-white/50 w-2"
                    }`}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`Go to work ${index + 1}`}
                />
              ))}
            </div>

            <AnimatePresence>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  boxShadow: [
                    "0 0 0px rgba(179, 203, 60, 0)",
                    "0 0 20px rgba(179, 203, 60, 0.6)",
                    "0 0 0px rgba(179, 203, 60, 0)"
                  ]
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={
                  showRightButton
                    ? { scale: 1.1, backgroundColor: "#B3CB3C" }
                    : {}
                }
                whileTap={showRightButton ? { scale: 0.95 } : {}}
                onClick={showRightButton ? handleNext : undefined}
                tabIndex={showRightButton ? 0 : -1}
                aria-disabled={!showRightButton}
                className={`p-3! rounded-full text-white transition duration-300 backdrop-blur-md${showRightButton
                  ? "visible pointer-events-auto hover:bg-[#B3CB3C] hover:text-black"
                  : "invisible pointer-events-none"
                  } `}
                aria-label="Next works"
              >
                <ChevronRight size={24} />
              </motion.button>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
