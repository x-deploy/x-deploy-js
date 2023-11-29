import 'tailwindcss/tailwind.css'
import './globals.css';
import styles from "./page.module.css";
import React from "react";
import {Header} from "../components/header";
import Footer from "../components/footer";
import {Hero} from "../components/index/hero";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
