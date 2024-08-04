import React from "react";
import HomeItem from "./homeItem";

export default function Skills() {
    return(
        <div className="flex flex-col md:flex-row p-8 bg-black w-full justify-evenly items-center border-b border-floral-white bg-gradient-to-r from-black via-dark-red to-black">
            <HomeItem />
            <HomeItem />
            <HomeItem />
        </div>
    );
};