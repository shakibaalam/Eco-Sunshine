import React, { useState } from "react";
import banner from "../../img/form-bg.jpg";

const DonateForm = () => {
  const options = ["Donate Amount", "Poor People"];
  const donates = ["$1000", "$2000", "$3000"];

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDonate, setSelectedDonate] = useState("");
  const [customOption, setCustomOption] = useState("");

  const handleDonateChange = (event) => {
    setSelectedDonate(event.target.value);
    if (!options.includes(event.target.value)) {
      setCustomOption(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      contact,
      selectedOption,
      selectedDonate: customOption || selectedDonate,
    });
  };

  return (
    <div
      className="w-full relative flex justify-between px-14 mt-20 "
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75 "/>
      <div className="lg:w-3/4 xl:w-4/5 mx-auto">

      <div className="relative z-10 bg-white w-[500px] px-10 py-3">
        <h2 className="uppercase text-2xl my-5">
          <span className="text-primary font-bold">Make</span> Donation
        </h2>
        <p className="text-primary">
          Vivamus Pellentesque Ligula Id Arcu Congue, Ac Vulputate Sem
          Consequat. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient
          Montes, Nascetur Ridiculus Mus.
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg my-5">
          <div className="mb-4">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#7abf18]"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
              placeholder="Email / Phone Number"
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#7abf18]"
              required
            />
          </div>

          <div className="mb-4">
            <select
              id="options"
              value={selectedOption}
              onChange={(event) => setSelectedOption(event.target.value)}
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#7abf18]"
            >
              <option value="" disabled className="text-gray-700">
                Select Campaign
              </option>
              {options.map((option) => (
                <option key={option} value={option} className="text-gray-700">
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <select
              id="options"
              value={selectedDonate}
              onChange={handleDonateChange}
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#7abf18] bg-white"
            >
              {donates.map((d) => (
                <option key={d} value={d} className="text-gray-700">
                  {d}
                </option>
              ))}
              <option value="$ Amount" className="text-gray-700">
                Write your own amount
              </option>
            </select>

            {selectedDonate === "$ Amount" && (
              <input
                type="text"
                value={customOption}
                onChange={(event) => setCustomOption(event.target.value)}
                className="w-full mt-2 px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#7abf18]"
              />
            )}
          </div>

          <button
            type="submit"
            className="px-4 py-2 w-full font-bold text-white bg-[#7abf18] rounded-md "
          >
            Donate
          </button>
        </form>
      </div>
      </div>
      

      <div></div>
    </div>
  );
};

export default DonateForm;
