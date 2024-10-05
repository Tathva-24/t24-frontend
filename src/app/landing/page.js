"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./landing.module.css";
import Navbar from "../Navbar/page";

export default function Landing() {
  const tathvaTextRef = useRef(null);
  const comingSoonTextRef = useRef(null);

  useEffect(() => {
    // Function to split text and wrap in span tags
    function breakText(ref) {
      const h1 = ref.current;
      const text = h1.textContent;
      const split = text.split("");
      let newText = "";

      // Wrap every letter with the `.a` class
      split.forEach(function (char) {
        newText += `<span class="${styles.a}">${char}</span>`;
      });

      h1.innerHTML = newText;
    }

    // Apply text splitting for both Tathva'24 and Coming Soon
    breakText(tathvaTextRef);
    breakText(comingSoonTextRef);

    // Create GSAP timeline for proper sequence with repeat
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 }); // repeat: -1 for infinite loop

    // Animate Tathva'24 first (fade out and move upwards)
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
        y: -80, // Moves upwards
        duration: 0.5,
        stagger: 0.15,
        ease: "power3.in",
      },
      "+=0.5" // Small pause before fade out
    );

    // Animate Coming Soon after Tathva'24 disappears
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
      "+=0.5" // Start this after Tathva'24 animation finishes
    );

  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.bg}></div>
      <Navbar />
      <div className={styles.landing}>
        <div className={styles.item1}>
          {/* Tathva'24 Text */}
          <h1 ref={tathvaTextRef} className={styles.letters}>
            Tathva'24
          </h1>

          {/* Coming Soon Text */}
          <h2 ref={comingSoonTextRef} className={styles.letters}>
            Coming- Soon
          </h2>
        </div>

        {/* Timeline for event dates */}
        <div className={styles.item2}>
          <h1>24 OCT</h1>
          <h1>25 OCT</h1>
          <h1>26 OCT</h1>
        </div>
      </div>
    </div>
  );
}
