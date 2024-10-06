"use client";
import { useEffect, useMemo, useState, useRef } from "react";
import { gsap } from "gsap";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Load the slim version for better performance
import Navbar from "../Navbar/page";
import styles from "./landing.module.css";

export default function Landing() {
  const tathvaTextRef = useRef(null);
  const comingSoonTextRef = useRef(null);
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Initialize Particle.js engine
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    // Function to split text and wrap in span tags
    function breakText(ref) {
      const h1 = ref.current;
      const text = h1.textContent;
      const split = text.split("");
      let newText = "";

      split.forEach(function (char) {
        newText += `<span class="${styles.a}">${char}</span>`;
      });

      h1.innerHTML = newText;
    }

    breakText(tathvaTextRef);
    breakText(comingSoonTextRef);

    // GSAP animation timeline with repeat
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    tl.from(`.${styles.a}`, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "power3.out",
    }).to(
      `.${styles.a}`,
      {
        opacity: 0,
        y: -80,
        duration: 0.5,
        stagger: 0.15,
        ease: "power3.in",
      },
      "+=0.5"
    );

    tl.fromTo(
      `.${styles.a}`,
      { y: -80, opacity: 0 },
      {
        y: 0,
        delay: 1.5,
        opacity: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: "power3.out",
      },
      "+=0.0"
    );
  }, []);

  const options = useMemo(() => {
    const screenWidth = window.innerWidth;
    let numberOfParticles = 180;
    let particleSize = { min: 1, max: 5 };
  
    // Adjust number and size of particles based on screen width
    if (screenWidth < 400) {
      numberOfParticles = 50; // Further reduce number for screens < 400px
      particleSize = { min: 1, max: 3 }; // Smaller dots for very small screens
    } else if (screenWidth < 700) {
      numberOfParticles = 100; // Reduce number for screens < 700px
      particleSize = { min: 1, max: 4 }; // Smaller dots for small screens
    }
  
    return {
      background: {
        color: {
          value: "#", // Adjusted to black background to match your landing page
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 100, // Reduced distance for the hover effect
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff", // White particles to stand out on the black background
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
        },
        number: {
          value: numberOfParticles, // Adjust number based on screen size
        },
        size: {
          value: particleSize, // Adjust size based on screen size
        },
      },
      detectRetina: true,
    };
  }, []);

  return (
    <div className={styles.main}>
      {/* Particles.js background */}
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          style={{ position: "absolute", zIndex: -1 }} // Ensure particles are behind other content
        />
      )}

      {/* Navbar */}
      <Navbar />

      {/* Landing Page Content */}
      <div className={styles.landing}>
        <div className={styles.item1}>
          <h1 ref={tathvaTextRef} className={styles.letters}>
            Tathva'24
          </h1>
          <h2 ref={comingSoonTextRef} className={styles.letters}>
            Coming-Soon
          </h2>
        </div>

        {/* Event Dates */}
        <div className={styles.item2}>
          <h1>24 OCT</h1>
          <h1>25 OCT</h1>
          <h1>26 OCT</h1>
        </div>
      </div>
    </div>
  );
}
