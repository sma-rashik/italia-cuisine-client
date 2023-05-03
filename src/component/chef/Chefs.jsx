import React, { useEffect, useState } from "react";
import Chef from "./Chef";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data?.chefs || []));
  }, []);

  return (
    <div>
      <div className="text-5xl text-center underline mt-10">
        <h1>Meet Italian Chefs</h1>
      </div>
      <div className="grid md:grid-cols-3 mt-32 p-4 ml-10">
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default Chefs;
