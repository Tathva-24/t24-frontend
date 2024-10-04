"use client";
import React, { useState } from "react";
import styles from "./reg.module.css"; // Import the CSS module
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
        <p> {label}</p>
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
          label="Name:"
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
          label="Email:"
          type="email"
          placeholder="example@gmail.com"
          name="email"
          value={formData.email}
          handleChange={handleChange}
        />
        <NameAndBox
          label="Contact Number:"
          type="text"
          placeholder="+91"
          name="number"
          value={formData.number}
          handleChange={handleChange}
        />
        <div className="text-1xl font-bold">Scan To Pay</div>
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
      <div>
        {/* <div class={styles.marqueecontainer}><div class={styles.marquee} >This is a diagonal marquee effect!</div></div> 
                <div class={styles.marqueecontainer1}><div class={styles.marquee} >This is a diagonal marquee effect!</div></div>   */}

        {
          <Image
            src="/hi.jpg"
            alt="Description of the image"
            width={250}
            height={250}
          />
        }
      </div>
      <div>
        <h1>Prompt Engineering</h1>
        <h3>Learn the Language of AI</h3>
        <h4> About the Workshop</h4>
        <p>
          {" "}
          These attributes allow you to customize the behavior and validation of
          input boxes in HTML forms, enhancing user experience and data
          collection. You can combine these attributes based on your
          requirements to create efficient forms.
        </p>
      </div>
      <div>
        <div className={styles.cont}>card1</div>
        <div className={styles.contmain}>card2</div>
        <div className={styles.cont}>card3</div>
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
