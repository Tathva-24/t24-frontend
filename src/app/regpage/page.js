"use client";
import React, { useState } from "react";
import styles from "./reg.module.css";
import Image from "next/image";

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
      <h1>Registration Form</h1>
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
        <div className={styles.scantopay}>Scan To Pay</div>
        <button className={styles.regbutton} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

function Info() {
  return (
    <div className={styles.infodiv}>
      <div className={styles.infoimgmar}>
        <div className={styles.infoimg}>
          <img src="/regph.jpg" alt="Description of the image" />
          <div class={styles.marqueecontainer}>
            <div class={styles.marquee}></div>
          </div>
          <div class={styles.marqueecontainer1}>
            <div class={styles.marquee}>
              HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY
              LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK HEY LOOK{" "}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Prompt Engineering</h1>
        <h3>Learn the Language of AI</h3>
        <h4> About the Workshop</h4>
        <p className>
          {" "}
          These attributes allow you to customize the behavior and validation of
          input boxes in HTML forms, enhancing user experience and data
          collection. You can combine these attributes based on your
          requirements to create efficient forms.
        </p>
      </div>
      <div className={styles.infocon}>
        <div className={styles.cont1}>card1</div>
        <div className={styles.contmain}>card2</div>
        <div className={styles.cont2}>card3</div>
      </div>
    </div>
  );
}

function Fullpage() {
  return (
    <div className={styles.page}>
      <Info />
      <Regform />
    </div>
  );
}

export default Fullpage;
