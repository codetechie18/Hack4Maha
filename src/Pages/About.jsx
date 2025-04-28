import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import PixelArt from "../components/PixelArt";

const About = () => {
  return (
    <div className="screen-on">
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle>About Hack4Maha</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-pixel text-white text-xl mb-6">
                OUR MISSION
              </h3>
              <p className="text-gray-200 mb-4">
                Hack4Maha is Maharashtra’s biggest 24-hour hackathon, where
                technology meets tradition. Powered by NariNexus, this
                arcade-themed hackathon celebrates the spirit of Maharashtra —
                from the bravery echoing in the stones of Sinhagad, Raigad, and
                Pratapgad, to the zest of Nagpur’s oranges and the unstoppable
                creativity of Mumbai’s streets.
              </p>
              <p className="text-gray-200 mb-4">
                Over 24 electrifying hours, developers, designers, and
                innovators will tackle challenges that blend cultural richness
                with futuristic tech. This is more than a hackathon — it’s a
                code-fest where every click, build, and brainstorm honors
                Maharashtra’s legacy.
              </p>
              <p className="text-gray-200">
                Get ready to play, hack, and create solutions that are bold,
                vibrant, and truly Maharashtrian.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="retro-card p-6">
                <img
                  src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Hackathon Participants"
                  className="w-full h-auto rounded-lg mb-6"
                />
                <div className="absolute -top-6 -right-6">
                  <PixelArt type="star" size="lg" />
                </div>
                <h3 className="font-pixel text-cyber-yellow mb-4">
                  WHY PARTICIPATE?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-neon-pink mr-2">✓</span>
                    <span>Blend Culture with Code</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-pink mr-2">✓</span>
                    <span>Experience 24 Hours of Innovation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-pink mr-2">✓</span>
                    <span>Grow Your Skills and Network</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-pink mr-2">✓</span>
                    <span>Create Impact, Win Glory</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/*       
      <section className="py-20 bg-space-blue/30">
        <div className="container-custom">
          <SectionTitle>The Journey</SectionTitle>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative"> */}
      {/* Timeline line */}
      {/* <div className="absolute h-full w-1 bg-cyber-yellow left-1/2 transform -translate-x-1/2"></div> */}

      {/* Timeline items */}
      {/* {[
                {
                  year: "2020",
                  title: "The Beginning",
                  description: "Hack4Maha was founded with a vision to create an inclusive platform for tech innovation in India."
                },
                {
                  year: "2021",
                  title: "Going Virtual",
                  description: "Adapted to the global pandemic by hosting our first fully virtual hackathon, reaching participants from over 15 countries."
                },
                {
                  year: "2022",
                  title: "Expanding Horizons",
                  description: "Introduced specialized tracks focused on AI, Blockchain, and Sustainable Technologies."
                },
                {
                  year: "2023",
                  title: "Community Growth",
                  description: "Built a thriving community of over 10,000 tech enthusiasts, with alumni working at top tech companies worldwide."
                },
                {
                  year: "2024",
                  title: "Global Recognition",
                  description: "Recognized as one of Asia's top hackathons, with participation from over 25 countries."
                },
                {
                  year: "2025",
                  title: "The Future",
                  description: "Set to host the biggest edition yet, with new challenges, more prizes, and unprecedented opportunities."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`mb-16 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="retro-card p-4">
                      <h3 className="font-pixel text-neon-pink text-lg mb-2">{item.year}</h3>
                      <h4 className="font-pixel text-cyber-yellow text-base mb-3">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                     */}
      {/* Timeline dot */}
      {/* <div className="absolute w-4 h-4 bg-neon-pink rounded-full left-1/2 transform -translate-x-1/2" style={{ top: `calc(${index * 16 + 8}rem)` }}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20">
        <div className="container-custom">
          <SectionTitle>Why Trust Us?</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "At Hack4Maha, 92% of participants praised the quality of our sessions and workshops, showcasing our commitment to creative thinking and breakthrough tech innovation.",
                icon: "💡",
              },
              {
                title: "Collaboration",
                description:
                  "94% of participants loved the networking opportunities we created, building bridges for future collaborations and shared success stories."


,
                icon: "🤝",
              },
              {
                title: "Inclusion",
                description:
                  "Hack4Maha is powered by community and inclusivity — with 90% rating their overall experience and satisfaction as excellent, regardless of background or skill level."
,

                icon: "🌈",
              },
              {
                title: "Learning",
                description:
                  "Continuous upskilling matters. 90% of attendees rated our speaker and mentor support as outstanding, helping participants learn, grow, and level up."
,

              },
              {
                title: "Impact",
                description:
                  "Thousands joined us for CodeHunt — and 98% applauded our event organization, helping impactful ideas transform into real-world solutions."
,
                icon: "🌍",
              },
              {
                title: "Fun",
                description:
                  "Fun is serious business! 97% of participants loved our activities and engagement, proving that innovation thrives where energy and excitement are high.",
                icon: "🎮",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="retro-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-pixel text-cyber-yellow text-lg mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
