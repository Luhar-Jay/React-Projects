import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us page</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="p-2 m-2 border border-black"
        />
        <input
          type="text"
          placeholder="Massege"
          className="p-2 m-2 border border-black"
        />
        <button className="m-2 p-2 border border-black rounded-lg bg-slate-200 font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
