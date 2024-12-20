import React, { useEffect, useState } from "react";
import Item from "../components/item";
import useFetch from "../hooks/useFetch"


export default function PortfolioAnimace() {
    const { loading, error, data } = useFetch(`${import.meta.env.VITE_BASE_URL}/api/animations?populate=image`)

    if (loading) return (<p>Loading...</p>)
    if (error) return (<p>An error has occured</p>)

    return(
        <div className="bg-main-bg">
            <div>
                <h1 className="text-floral-white text-left pt-8 pl-8 pb-4 font-exo2 text-3xl">
                    Animace
                </h1>
                <p className="text-floral-white font-lato text-md px-8 mb-4">Brzy k dispozici </p>
            </div>
           <div className="grid grid-cols-1 gap-1 ml-9 mb-8 sm:grid-cols-2 md:grid-cols-3">
                {data.map(artwork => (<Item artwork={artwork} key={artwork.id} />))}
           </div>
        </div>
    );
};