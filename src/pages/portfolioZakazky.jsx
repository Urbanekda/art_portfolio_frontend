import React from "react";
import Item from "../components/item";

export default function PortfolioZakazky() {
    return(
        <div className="bg-main-bg">
            <div>
                <h1 className="text-floral-white text-left pt-8 pl-8 pb-4 font-exo2 text-3xl">
                    Zakázková tvorba
                </h1>
                <p className="text-floral-white font-lato text-md px-8 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum, libero in aliquet aliquet, augue dui luctus felis, et ullamcorper augue quam sit amet ligula.
                    Sed aliquam ut turpis nec tristique. Donec non bibendum metus. Pellentesque at consectetur massa, id eleifend enim. 
                    Proin euismod lorem ut faucibus consectetur. </p>
                <p className="text-floral-white font-lato text-md px-8 mb-4">Duis egestas dolor nunc, vitae maximus erat posuere non. 
                    Vestibulum eu leo sodales, gravida risus vitae, vestibulum enim. Suspendisse ac ante orci. 
                    Vestibulum bibendum purus tortor, at placerat ipsum interdum a.</p> 
            </div>
           <div className="grid grid-cols-1 gap-1 ml-9 mb-8 sm:grid-cols-2 md:grid-cols-3">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
           </div>
        </div>
    );
};