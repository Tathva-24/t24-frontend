"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./reg.module.css";
import Image from "next/image";
import gsap from "gsap";

const NameAndBox = ({
  label,
  type,
  placeholder,
  name,
  value,
  handleChange,
}) => {
  return (
    <div className={styles.inputbox_header}>
      <label htmlFor={name}>
        <div styles={{ width: 200, height: 100 }}> {label}</div>
      </label>
      <input
        type={type}
        id={name}
        name={name} // Dynamically bind the name attribute
        placeholder={placeholder} // Dynamically set placeholder
        value={value} // Controlled input with passed value
        onChange={handleChange} // Handle input changes
        required
        className={styles.inputbox} // Apply custom styles
      />
    </div>
  );
};

function Regform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, College: ${formData.college} , Number: ${formData.number}`
    );
  };

  return (
    <div className={styles.regformdiv}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <NameAndBox
          label="Name"
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          handleChange={handleChange}
        />
        <NameAndBox
          label="College Name"
          type="text"
          placeholder="Your College Name"
          name="college"
          value={formData.college}
          handleChange={handleChange}
        />
        <NameAndBox
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          name="email"
          value={formData.email}
          handleChange={handleChange}
        />
        <NameAndBox
          label="Contact Number"
          type="text"
          placeholder="+91"
          name="number"
          value={formData.number}
          handleChange={handleChange}
        />

        <div className={styles.scanandreg}>
          <div className={styles.scantopay}>Scan To Pay</div>
          <button className={styles.regbutton} type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CSSRulePlugin, Draggable);

function Info() {
  const marqueeRef = useRef(null);
  const marqueeRef1 = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef1.current;

    // Duplicate the content for smooth looping
    const duplicateMarqueeContent = marquee.innerHTML;
    marquee.innerHTML += duplicateMarqueeContent; // Duplicate the marquee content

    const totalWidth = marquee.scrollWidth / 2; // Width of the original content

    // Animate the marquee
    gsap.to(marquee, {
      x: -totalWidth, // Move it to the right by the width of the content
      duration: 80, // Adjust the speed (slow down with a higher value)
      ease: "none", // Linear motion for seamless scrolling
      repeat: -1, // Infinite loop
    });
  }, []);

  useEffect(() => {
    const marquee = marqueeRef.current;

    // Duplicate the content for smooth looping
    const duplicateMarqueeContent = marquee.innerHTML;
    marquee.innerHTML += duplicateMarqueeContent;

    const totalWidth = marquee.scrollWidth / 2;
    gsap.to(marquee, {
      x: -totalWidth, // Move it to the left by the width of the content
      duration: 80, // Adjust the speed
      ease: "none", // Linear motion, no easing
      repeat: -1, // Infinite loop
    });
  }, []);

  return (
    <div className={styles.infodiv}>
      <div className={styles.infoimg}>
        <img src="/regph.png" alt="Description of the image" />
        <div className={styles.marqueecontainer}>
          <div ref={marqueeRef} className={styles.marquee}>
            {/* Marquee content, duplicated inside the useEffect */}
            HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY
            LOOK{" "}
          </div>
        </div>
        <div className={styles.marqueecontainer1}>
          <div ref={marqueeRef1} className={styles.marquee}>
            {/* Marquee content, duplicated inside the useEffect */}
            HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY
            LOOK{" "}
          </div>
        </div>
      </div>

      <div className={styles.infodiv2}>
        <div className={styles.infodivchead}>
          <p>Prompt Engineering</p>
        </div>
        <div className={styles.infodivc0}>
          <p>Learn the Language of AI</p>
        </div>

        <div className={styles.infodivc1}>
          <p> About the Workshop</p>
        </div>
        <div className={styles.infodivc2}>
          <p>
            These attributes allow you to customize the behavior and validation
            of input boxes in HTML forms, enhancing user experience and data
            collection. You can combine these attributes based on your
            requirements to create efficient forms.
          </p>
        </div>
      </div>
      <div className={styles.infocon}>
        <div className={styles.cont1}>
          <div>
            <img
              className={styles.cont1logo}
              src="/Vector1.svg"
              alt="Description of the image"
            />
          </div>
          <div className={styles.cont1info}>
            <div>Contact:</div>
            <div>9988765432</div>
          </div>
        </div>
        <div className={styles.contmain}>
          <div className={styles.date}>Date: 4th June 2024</div>
          <div className={styles.timeSection}>
            <div className={styles.time}>4:00pm - 6:00pm</div>

            <div className={styles.label}>
              <div>
                <img
                  src="/Vector.svg"
                  className={styles.labellogo}
                  alt="Description of the image"
                />
              </div>{" "}
              NIT Calicut<div></div>
            </div>
          </div>
        </div>
        <div className={styles.cont2}>Price:599/-</div>
      </div>
    </div>
  );
}

function Fullpage() {
  return (
    <>
      <div className={styles.page}>
        <Info />
        <Regform />
      </div>
    </>
  );
}

export default Fullpage;
