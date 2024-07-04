import React from "react";
import Banner from "../components/banner";
import Skills from "../components/skills"
import Intro from "../components/intro";
import Animation from "../components/animation";

export default function Home() {
    return(
        <div>
           <Banner />
           <Animation />
           <Skills />
           <Intro />
        </div>
    );
};