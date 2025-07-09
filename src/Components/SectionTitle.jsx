import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const SectionTitle = ({ children, centered = true, containerClass = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.03,
          duration: 0.5,
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Split children into lines and then words
  const lines = String(children).split("<br />");

  return (
    <div
      ref={containerRef}
      className={clsx("animated-title px-6 md:px-10", containerClass)}
    >
      {lines.map((line, index) => (
        <div
          key={index}
          className={clsx(
            "flex-center max-w-full flex-wrap gap-2 md:gap-3 text-[#ff5c00] arcade-title",
            centered ? "justify-center text-center" : "justify-start text-left"
          )}
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word inline-block opacity-0"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SectionTitle;
