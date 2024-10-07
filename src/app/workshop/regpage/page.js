"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./reg.module.css";
import Image from "next/image";
import gsap from "gsap";
import Infocont from "./infoconweb";
import InfoconMob from "./infoconmob";

import { motion } from "framer-motion";
const NameAndBox = ({
  label,
  type,
  placeholder,
  name,
  value,
  handleChange,
}) => {
  return (
    <div>
      <label htmlFor={name}>
        <div className={styles.inputbox_header}> {label}</div>
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
    <>
      <form className={styles.regformdiv} onSubmit={handleSubmit}>
        <div className={styles.regformhead}>Register here</div>
        <div className={styles.regforma}>
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
        </div>
        <div  className={styles.paydiv}>
        <div className={styles.buttonshadow}>
          <button className={styles.regbutton} type="submit">
            Pay Now
          </button>
        </div>
        </div>
      </form>
    </>
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

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.infodiv}>
      <div className={styles.infoimg}>
        <img src="/regph.png" alt="Description of the image" />
        <div className={styles.marqueecontainer}>
          <div ref={marqueeRef} className={styles.marquee}>
            HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY
            LOOK{" "}
          </div>
        </div>
        
        <div className={styles.marqueecontainer1}>
          <div ref={marqueeRef1} className={styles.marquee}>
            HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY
            LOOK{" "}
          </div>
        </div>
      </div>

      <div className={styles.infoimgmob}>
        <img src="/b2.svg" alt="Description of the image" />
        <div className={styles.marqueecontainer}>
          <div  className={styles.marquee}>
            HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY
            LOOK{" "}
          </div>
        </div>
        
        <div className={styles.marqueecontainer1}>
          <div  className={styles.marquee}>
            HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY
            LOOK{" "}
          </div>
        </div>
      </div>

      <div className={styles.infodiv2}>
        <div className={styles.infodivchead}><p>Prompt Engineering</p></div>
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
      <Infocont />
      <InfoconMob />
    </div>
  );
}

const Modal = ({ isOpen, onClose }) => {
  return (
    <motion.div
      className={styles.modalBackdrop}
      initial={{ opacity: 0 }} // Initial state
      animate={{ opacity: 1 }} // Animate to this state
      exit={{ opacity: 0 }} // Exit state
      transition={{ duration: 0.3 }} // Transition duration
    >
      <motion.div
        className={styles.modalContent}
        initial={{ scale: 0 }} // Start scaled down to 0
        animate={{ scale: 1 }} // Animate to original size
        exit={{ scale: 0 }} // Exit by scaling down to 0
        transition={{ duration: 0.3 }} // Transition duration
      >
        <div className={styles.main}>
          <div className={styles.page}>
            <div className={styles.form}>
              {/* <button className={styles.closeButton} onClick={onClose}>
                X
              </button> */}
              <Info />
              <Regform />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
