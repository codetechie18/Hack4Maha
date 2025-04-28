import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import PixelArt from '../components/PixelArt';

const SponsorTier = ({ title, description, sponsors, delay }) => {
  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="font-pixel text-xl text-neon-pink mb-6">{title}</h3>
      <p className="mb-8 max-w-3xl">{description}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sponsors.map((sponsor, index) => (
          <motion.div 
            key={index}
            className="retro-card p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
          >
            <div className="w-36 h-24 flex items-center justify-center mb-6">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-w-full max-h-full"
              />
            </div>
            <h4 className="font-pixel text-cyber-yellow text-lg mb-3">{sponsor.name}</h4>
            <p className="text-sm text-gray-300 mb-4">{sponsor.description}</p>
            <a 
              href={sponsor.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyber-teal hover:text-neon-pink transition-colors duration-300 text-sm font-bold"
            >
              Visit Website →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Sponsors = () => {
  // Sample sponsor data - replace with actual sponsor information
  const sponsors = {
    platinum: [
      {
        name: "TechGiant Corp",
        logo: "https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Leading technology company specializing in cloud solutions and AI services.",
        website: "https://example.com"
      },
      {
        name: "InnovateNow",
        logo: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Pioneer in digital transformation and innovative software development.",
        website: "https://example.com"
      }
    ],
    gold: [
      {
        name: "DevStack",
        logo: "https://images.pexels.com/photos/5473289/pexels-photo-5473289.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Developer platform offering tools and services for building modern applications.",
        website: "https://example.com"
      },
      {
        name: "CloudMatrix",
        logo: "https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Cloud infrastructure provider with global data centers and cutting-edge technology.",
        website: "https://example.com"
      },
      {
        name: "DataVision",
        logo: "https://images.pexels.com/photos/5473310/pexels-photo-5473310.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Data analytics company providing insights and solutions for businesses.",
        website: "https://example.com"
      }
    ],
    silver: [
      {
        name: "CodeCraft",
        logo: "https://images.pexels.com/photos/5473962/pexels-photo-5473962.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Software development company specializing in web and mobile applications.",
        website: "https://example.com"
      },
      {
        name: "SecureNet",
        logo: "https://images.pexels.com/photos/5473953/pexels-photo-5473953.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Cybersecurity solutions provider protecting digital assets worldwide.",
        website: "https://example.com"
      },
      {
        name: "AILabs",
        logo: "https://images.pexels.com/photos/5473307/pexels-photo-5473307.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Research-driven artificial intelligence company developing cutting-edge AI models.",
        website: "https://example.com"
      }
    ],
    community: [
      {
        name: "TechHub",
        logo: "https://images.pexels.com/photos/5473305/pexels-photo-5473305.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Co-working space and community for tech startups and entrepreneurs.",
        website: "https://example.com"
      },
      {
        name: "DevNetwork",
        logo: "https://images.pexels.com/photos/5473950/pexels-photo-5473950.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Platform connecting developers and providing resources for growth.",
        website: "https://example.com"
      },
      {
        name: "InnovateCampus",
        logo: "https://images.pexels.com/photos/5473946/pexels-photo-5473946.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Educational institution offering courses in technology and innovation.",
        website: "https://example.com"
      }
    ]
  };
  
  return (
    <div className="screen-on">
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle>Our Sponsors</SectionTitle>
          <motion.p 
            className="text-center max-w-2xl mx-auto mb-16 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hack4Maha is made possible by the generous support of our sponsors. These organizations are committed to 
            fostering innovation and supporting the next generation of tech talent.
          </motion.p>
          
          <div className="relative">
            <div className="absolute top-10 right-10 hidden xl:block">
              <PixelArt type="planet" size="xl" />
            </div>
            
            <SponsorTier 
              title="PLATINUM SPONSORS"
              description="Our Platinum sponsors are the cornerstone of Hack4Maha, providing major financial support, resources, and expertise."
              sponsors={sponsors.platinum}
              delay={0.1}
            />
            
            <SponsorTier 
              title="GOLD SPONSORS"
              description="Gold sponsors play a crucial role in supporting our hackathon with significant contributions and specialized resources."
              sponsors={sponsors.gold}
              delay={0.2}
            />
            
            <SponsorTier 
              title="SILVER SPONSORS"
              description="Silver sponsors help enhance the hackathon experience through their valuable support and participation."
              sponsors={sponsors.silver}
              delay={0.3}
            />
            
            <SponsorTier 
              title="COMMUNITY PARTNERS"
              description="Our community partners help us reach a wider audience and create a more inclusive environment for all participants."
              sponsors={sponsors.community}
              delay={0.4}
            />
          </div>
        </div>
      </section>
      
       
        
    </div>
  );
};

export default Sponsors;