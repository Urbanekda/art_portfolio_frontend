import React from "react";
import Banner from "../components/banner";
import Skills from "../components/skills"
import Intro from "../components/intro";

export default function Home() {
    return(
        <div>
           <Banner />
           <Skills />
           <Intro />
        </div>
    );
};