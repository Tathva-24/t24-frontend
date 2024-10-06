"use client";
import React, { useState } from "react";
import styles from "./reg.module.css";
import Image from "next/image";

function Fullpage() {
    return (
      <>
        <div className={styles.page}>
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
      </>
    );
  }
  
  export default Fullpage;
  