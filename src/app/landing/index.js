"use client";
import useSWR from 'swr'
import { useEffect, useMemo, useState, useRef } from "react";
import { gsap } from "gsap";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim"; // Load the slim version for better performance
import Navbar from "../Navbar/page";
import styles from "./landing.module.css";


export default function Landing() {
  const tathvaTextRef = useRef(null);
  const comingSoonTextRef = useRef(null);
  const [init, setInit] = useState(false);

  useEffect(() => {
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

  return (
  
    <div className={styles.main}>
      {/* Navbar */}
      <Navbar />

      {/* Landing Page Content */}
      <div className={styles.landing}>
        <div className={styles.item1}>
          <h1 ref={tathvaTextRef} className={styles.letters}>
            Tathva&apos;24
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
