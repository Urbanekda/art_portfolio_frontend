import React from "react";
import Postava from "../assets/postava.png"
import { useNavigate } from "react-router-dom";

export default function Intro() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/o_mne")
    }
    return(
        <div className="flex flex-col md:flex-row justify-center items-center p-8 bg-main-bg">
            <img src={Postava} alt="Vojtěch Novák stojící u řeky" className="w-96 h-64 object-cover rounded shadow-red-shadow mt-4 md:mt-0" />
            <div className="md:ml-8 flex flex-col items-center">
                <h2 className="mt-3 md:mt-0 font-exo2 text-xl text-floral-white underline text-center">Tvořím na hranicích médií</h2>
                <p className="text-center text-floral-white text-lg font-lato my-4 max-w-80">"<i>V mých dílech se setkáte s melancholickým světem, který odhaluje transcendentální symboliku každodenního života.</i>"</p>
                <button className="mt-4 bg-dark-red text-white py-2 px-10 rounded hover:bg-red-950 underline transition duration-300 hover:scale-110" onClick={handleClick}>Více o mně</button>
            </div>
        </div>
    )
};