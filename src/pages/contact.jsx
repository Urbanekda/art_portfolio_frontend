import React, { useState } from 'react';

const Contact = () => {
  
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreePolicy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData("Sending....");
    const formData = new FormData(e.target);

    formData.append("access_key", "ba2f4575-8e5e-43fd-95d9-7e1609089954");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setFormData("Form Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      setFormData(data.message);
    }
    console.log(formData);
    alert("Zpráva odeslána :)")
  };

  return (
    <div className="max-w-md mx-auto p-6 text-floral-white">
      <h2 className="text-center text-3xl font-exo2 mb-4">Máte nápad?</h2>
      <p className="mb-4 text-center text-md font-lato">Ozvěte se mi! Zanechte kontakt ve formuláři a domluvíme se na spolupráci.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="firstName" className="block mb-1">Jméno</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 bg-floral-white text-black rounded"
              placeholder="Jméno"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="block mb-1">Příjmení</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 bg-floral-white text-black rounded"
              placeholder="Příjmení"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-floral-white text-black rounded"
            placeholder="you@company.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block mb-1">Telefonní číslo</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 bg-floral-white text-black rounded"
            placeholder="+420 123 456 789"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-1">Zpráva</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 bg-floral-white text-black rounded"
            rows="4"
          ></textarea>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agreePolicy"
            name="agreePolicy"
            checked={formData.agreePolicy}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="agreePolicy">Souhlasím se zpracováním osobních dat</label>
        </div>
        
        <button type="submit" className="w-full py-2 px-4 bg-dark-red text-floral-white rounded hover:bg-red-950 underline transition duration-150 hover:scale-105">
          Poslat zprávu
        </button>
      </form>
    </div>
  );
};

export default Contact;