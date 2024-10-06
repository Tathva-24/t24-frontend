"use client";
import React, { useState } from "react";
import styles from "./reg.module.css";
import Image from "next/image";

function InfoconMob() {
  return (
    <>
      <div className={styles.infoconm}>
        <div className={styles.contmain}>
          <div className={styles.upper}>
            <div className={styles.price}>Price:599/-</div>
            <div className={styles.contact}>
              <div>
                <img
                  className={styles.contactlogo}
                  src="/Vector1.svg"
                  alt="Description of the image"
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
                  alt="Description of the image"
                />
              </div>{" "}
              NIT Calicut<div></div>
            </div>
          </div>
        </div>
        <div className={styles.cont2}>Register</div>
      </div>
    </>
  );
}

export default InfoconMob;
