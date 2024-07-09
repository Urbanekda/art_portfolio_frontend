import React from "react";

export default function Contact() {
    return (
        <div className="flex flex-col md:flex-row p8 items-center justify-center">
           <form>
                <h2 className="text-2xl text-floral-white font-exo2 p-8">Máte nápad?</h2>
                <p className="text-md text-floral-white font-lato px-8 mb-4">Ozvěte se mi! Zanechte kontakt ve formuláři a domluvíme se na spolupráci.</p>
                <div className="text-floral-white font-lato rounded-md p-4 flex-col">
                    <label className="p-4">Jméno</label>
                    <input id="name" type="text" className="field" placeholder="Zadejte vaše křestní jméno" required />
                </div>
                <div className="text-floral-white font-lato rounded-md p-4">
                    <label>Příjmení</label>
                    <input id="surname" type="text" className="field" placeholder="Zadejte vaše příjmení" required />
                </div>
                <div className="text-floral-white font-lato rounded-md p-4">
                    <label>e-mail</label>
                    <input id="email" type="email" className="field" placeholder="Zadejte svůj email" required></input>
                </div>
                <div className="text-floral-white font-lato rounded-md p-4">
                    <label>Telefonní číslo</label>
                    <input id="number" type="text" className="field" placeholder="Zadejte telefonní číslo"></input>
                </div>
                <div className="text-floral-white font-lato rounded-md p-4">
                    <label>Zpráva</label>
                    <textarea placeholder="Zadejte zprávu"></textarea>
                    <button type="submit">Odeslat</button>
                </div>
           </form>
        </div>
    );
};