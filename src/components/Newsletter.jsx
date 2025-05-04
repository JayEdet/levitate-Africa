import { useState } from "react";

export default function Newsletter() {
  const [name, setName] = useState("");
  return (
    <div className="flex flex-col gap-8">
      <form className="flex flex-col gap-8 z-30 text-white bg-black/70 p-8">
        <h3 className="text-soillight-200 text-2xl ">
          Sign up for our Newsletter
        </h3>
        <input
          type="text"
          name="firstName"
          className="border-b border-white outline-none focus:border-color text-white placeholder-white  py-2 w-full md:w-[300px]"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          className="border-b border-white outline-none focus:border-color text-white placeholder-white py-2 w-full md:w-[300px]"
          required
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          className="border-b border-white outline-none focus:border-color text-white placeholder-white py-2 w-full md:w-[300px]"
          required
          placeholder="Email Address"
        />
        <button className="button bg-forestlight-900 text-soillight-200">
          Submit
        </button>
      </form>
    </div>
  );
}
