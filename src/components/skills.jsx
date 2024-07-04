import React from "react";
import Item from "../components/item"

export default function Skills() {
    return(
        <div className="flex flex-col md:flex-row p-8 bg-black w-full justify-evenly items-center bg-gradient-to-r from-black via-dark-red to-black">
            <Item />
            <Item />
            <Item />
        </div>
    );
};