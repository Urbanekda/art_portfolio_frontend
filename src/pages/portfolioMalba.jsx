import React, { useEffect, useState } from "react";
import Item from "../components/item";
import useFetch from "../hooks/useFetch"

export default function PortfolioMalba() {
    const { loading, error, data } = useFetch(`${import.meta.env.VITE_BASE_URL}/api/paintings?populate=image`)

    if (loading) return (<p>Loading...</p>)
    if (error) return (<p>An error has occured</p>)

    return(
        <div className="bg-main-bg">
            <div>
                <h1 className="text-floral-white text-left pt-8 pl-8 pb-4 font-exo2 text-3xl">
                    Malba
                </h1>
                <p className="text-floral-white font-lato text-md px-8 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum, libero in aliquet aliquet, augue dui luctus felis, et ullamcorper augue quam sit amet ligula.
                    Sed aliquam ut turpis nec tristique. Donec non bibendum metus. Pellentesque at consectetur massa, id eleifend enim. 
                    Proin euismod lorem ut faucibus consectetur. </p>
                <p className="text-floral-white font-lato text-md px-8 mb-4">Duis egestas dolor nunc, vitae maximus erat posuere non. 
                    Vestibulum eu leo sodales, gravida risus vitae, vestibulum enim. Suspendisse ac ante orci. 
                    Vestibulum bibendum purus tortor, at placerat ipsum interdum a.</p> 
            </div>
           <div className="grid grid-cols-1 gap-1 ml-9 mb-8 sm:grid-cols-2 md:grid-cols-3">
                {data.map(artwork => (<Item artwork={artwork} key={artwork.id} />))}
           </div>
        </div>
    );
};