'use client'
import 'tailwindcss/tailwind.css'
import './globals.css';
import styles from "./page.module.css";
import React from "react";
import {Header} from "../components/header";
import Footer from "../components/footer";
import {Hero} from "../components/index/hero";
import {Button} from "../components/basics/buttons";
import {DropdownContent} from "../components/basics/client/dropdown-content";
import {SpaceBar} from "../components/basics/space-bar";
export default function Page(): JSX.Element {

    const [isOpen, setIsOpen] = React.useState(false);

  return (
      <>
        <Button className="bg-red-500"
                click={() => setIsOpen(!isOpen)}
        >Open</Button>
        <DropdownContent isOpen={isOpen} className="w-64">
            <div className="flex flex-col">
                <Button  variant={"primary"}>Open</Button>
                <Button variant={"primary"}>Open</Button>
                <SpaceBar/>
                <Button>Open</Button>
            </div>
        </DropdownContent>
      </>
  );
}
