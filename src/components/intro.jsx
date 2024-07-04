import React from "react";
import Postava from "../assets/postava.png"
import { useNavigate } from "react-router-dom";

export default function Intro() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/o_mne")
    }
    return(
        <div className="flex flex-col md:flex-row justify-center p-8 bg-main-bg">
            <img src={Postava} alt="Vojtěch Novák stojící u řeky" className="w-96 h-64 object-cover rounded shadow-red-shadow mt-8 md:mt-0" />
            <div className="md:ml-8">
                <h2 className="font-exo2 text-xl text-floral-white underline text-center">Zamkněte svoje dcery</h2>
                <p className="text-left text-floral-white text-lg font-lato my-4 max-w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur  egestas lectus, </p>
                <p className="text-left text-floral-white text-sm font-lato my-4 max-w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur  egestas lectus,</p>
                <button className="mt-4 bg-dark-red text-white py-2 px-10 rounded hover:bg-red-950 underline" onClick={handleClick}>Více o mně</button>
            </div>
        </div>
    )
};