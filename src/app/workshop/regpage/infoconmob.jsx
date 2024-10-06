"use client";
import React, { useRef } from "react";
import styles from "./reg.module.css";

function InfoconMob() {
  // Create a reference to the bottom of the page
  const bottomRef = useRef(null);

  // Function to handle scroll
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.infoconm}>
        <div className={styles.contmain}>
          <div className={styles.upper}>
            <div className={styles.price}>Price: 599/-</div>
            <div className={styles.contact}>
              <div>
                <img
                  className={styles.contactlogo}
                  src="/Vector1.svg"
                  alt="Contact Logo"
                />
              </div>
              <div className={styles.contactinfo}>
                <div>9988765432</div>
              </div>
            </div>
          </div>
          <div className={styles.date}>Date: 4th June 2024</div>
          <div className={styles.down}>
            <div className={styles.time}>4:00pm - 6:00pm</div>
            <div className={styles.label}>
              <div>
                <img
                  src="/Vector.svg"
                  className={styles.labellogo}
                  alt="Label Logo"
                />
              </div>{" "}
              NIT Calicut
            </div>
          </div>
        </div>
        {/* Add onClick event to the Register button */}
        <div className={styles.cont2} onClick={scrollToBottom}>
          Register
        </div>
      </div>

      {/* This is the element you scroll to */}
      <div
        ref={bottomRef}
        style={{ height: "0px", backgroundColor: "#f0f0f0" }}
      >
        {/* Content at the bottom of the page */}
      </div>
    </>
  );
}

export default InfoconMob;
