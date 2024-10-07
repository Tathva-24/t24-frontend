import Image from "next/image";
import styles from "./page.module.css";
import Landing from './Landing'
import { HeroHighlight } from './Landing/hero-highlight'
export default function Home() {
  return (
    <>
      <HeroHighlight>
        <Landing />
      </HeroHighlight>
    </>
  );
}
