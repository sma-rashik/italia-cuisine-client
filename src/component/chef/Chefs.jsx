import React, { useEffect, useState } from "react";
import Chef from "./Chef";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data.chefs));
  }, []);

  return (
    <div className="grid grid-cols-3 mt-32 p-4 ml-10">
      {chefs.map((chef) => (
        <Chef key={chef.id} chef={chef} />
      ))}
    </div>
  );
};

export default Chefs;
