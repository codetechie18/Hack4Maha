import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import PixelArt from "../Components/PixelArt";

const sponsors = {
  platinum: [
    {
      name: "HackQuest",
      logo: "/img/devfolio.png",
      website: "https://hackquest.io",
    },
  ],
  gold: [
    {
      name: "InnovateNow",
      logo: "/img/devfolio.png",
      website: "https://example.com",
    },
    {
      name: "TechVision",
      logo: "/img/devfolio.png",
      website: "https://example.com",
    },
  ],
  silver: [
    {
      name: "CodeCraft",
      logo: "/img/devfolio.png",
      website: "https://example.com",
    },
    {
      name: "DevStack",
      logo: "/img/devfolio.png",
      website: "https://example.com",
    },
    {
      name: "CloudMatrix",
      logo: "/img/devfolio.png",
      website: "https://example.com",
    },
  ],
  community: [
    {
      name: "SecureNet",
      logo: "/img/nn.png",
      website: "https://example.com",
    },
    {
      name: "TechHub",
      logo: "/img/nn.png",
      website: "https://example.com",
    },
    {
      name: "DevNetwork",
      logo: "/img/nn.png",
      website: "https://example.com",
    },
    {
      name: "InnovateCampus",
      logo: "/img/nn.png",
      website: "https://example.com",
    },
  ],
};

const tierInfo = {
  platinum: {
    color: "text-[#ff5c00]",
    border: "border-[#ff5c00]",
    glow: "shadow-[#ff5c00]/50",
    hoverBg: "hover:bg-[#ff5c00]/10",
    cardSize: "lg:w-80 lg:h-64",
  },
  gold: {
    color: "text-[#ffb347]",
    border: "border-[#ffb347]",
    glow: "shadow-[#ffb347]/40",
    hoverBg: "hover:bg-[#ffb347]/10",
    cardSize: "lg:w-72 lg:h-56",
  },
  silver: {
    color: "text-[#199b1f]",
    border: "border-[#199b1f]",
    glow: "shadow-[#199b1f]/40",
    hoverBg: "hover:bg-[#199b1f]/10",
    cardSize: "lg:w-64 lg:h-48",
  },
  community: {
    color: "text-white",
    border: "border-gray-500",
    glow: "shadow-gray-500/30",
    hoverBg: "hover:bg-gray-500/10",
    cardSize: "lg:w-60 lg:h-44", // increased size
  },
};

const Sponsors = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[80vh] ">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-[#ff5c00] font-pixel text-2xl mb-6">
            Loading Sponsors...
          </p>
          <div className="w-64 h-4 bg-gray-800 border-2 border-[#ff5c00] overflow-hidden mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-[#199b1f] to-[#ff5c00]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="font-pixel text-white text-sm"
          >
            Initializing Sponsor Database...
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="screen-on">
      <section className="py-20 relative overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 hidden lg:block"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <PixelArt type="satellite" size="md" />
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 hidden lg:block"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <PixelArt type="planet" size="lg" />
        </motion.div>

        <div className="container-custom">
          <SectionTitle>Our Sponsors</SectionTitle>

          <p className="text-white text-center font-pixel text-sm max-w-2xl mx-auto mb-12">
            The organizations powering Hack4Maha's mission for innovation and
            impact.
          </p>

          {Object.entries(sponsors).map(([tier, sponsorList]) => (
            <div key={tier} className="mb-16">
              <h3
                className={`text-center font-pixel text-xl mb-8 ${tierInfo[tier].color}`}
              >
                {tier.toUpperCase()} SPONSORS
              </h3>

              {tier === "community" ? (
                <div className="relative w-full overflow-hidden">
                  <motion.div
                    className="flex gap-4 animate-slide-infinite"
                    style={{ minWidth: "fit-content" }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {[...sponsorList, ...sponsorList, ...sponsorList].map(
                      (sponsor, index) => (
                        <motion.a
                          key={index}
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block w-44 h-36 bg-[#222] border ${tierInfo[tier].border} rounded-md shadow-md flex flex-col items-center justify-center p-2 mx-2 text-center transition-transform hover:scale-105 duration-300`}
                        >
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="h-16 object-contain mb-1"
                          />
                          <h4 className="font-pixel text-white text-sm w-full text-center break-words px-1">
                            {sponsor.name}
                          </h4>
                        </motion.a>
                      )
                    )}
                  </motion.div>
                </div>
              ) : (
                <div className="flex flex-wrap justify-center items-center gap-8">
                  {sponsorList.map((sponsor, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true }}
                      className={`retro-card flex flex-col items-center justify-between text-center p-6 bg-[#1a1a1a] rounded-xl shadow-lg transition-all duration-300 border-2 ${tierInfo[tier].border} ${tierInfo[tier].hoverBg} ${tierInfo[tier].cardSize} min-h-[200px] relative group overflow-hidden ${tierInfo[tier].glow}`}
                    >
                      <div className="w-full h-24 border border-gray-600 bg-white mb-4 flex items-center justify-center rounded-lg overflow-hidden group-hover:border-gray-400 transition-colors duration-300">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: "#ffffff" }}
                        />
                      </div>
                      <h4
                        className={`font-pixel text-sm mb-3 ${tierInfo[tier].color}`}
                      >
                        {sponsor.name}
                      </h4>
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#199b1f] font-pixel text-xs hover:text-[#ff5c00] transition-colors duration-200 border border-[#199b1f] hover:border-[#ff5c00] px-3 py-1 rounded whitespace-nowrap"
                      >
                        Visit Website →
                      </a>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
