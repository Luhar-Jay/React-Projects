import { useState } from "react";

const User = ({ name, location, email }) => {
  const [count] = useState(0);
  return (
    <div className="user-card m-4 p-4 bg-gray-100 rounded-lg">
      <h1>count: {count}</h1>
      <h2>Name: {name} </h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {email}</h4>
    </div>
  );
};

export default User;
