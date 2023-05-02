import React from "react";

const Chef = ({ chef }) => {
  const { name, picture, id } = chef;
  return (
    <div>
      <div className="mt-10 card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-64 w-64 " src={picture} alt="Chef" />
        </figure>
        <div className="card-body">
          <div className="text-center">
            <h2 className="card-title ">{name}</h2>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Chef</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
{
  /* {chefs.map((chef) => (
        <Chef key={chef.id} chef={chef && chef.id ? chef : {}}></Chef>
      ))} */
}
