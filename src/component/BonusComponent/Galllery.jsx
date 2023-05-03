import React from "react";
import img1 from "../../assets/risotto-di-seppie-alla-veneziana-1643401533.jpg";
import img2 from "../../assets/cotoletta-alla-milanese-1643401533.jpg";
import img3 from "../../assets/osso-buco-alla-milanese-1643401533.kpg.jpg";
import img4 from "../../assets/pizza-napoletana-1643401533.webp";
import img5 from "../../assets/ribollita-1643401533.jpg";
import img6 from "../../assets/bottarga-1643401533.webp";
import img7 from "../../assets/bistecca-fiorentina-1643401533.webp";
import img8 from "../../assets/baccal-1643401533.webp";
import img9 from "../../assets/canederli-1643401533.webp";
import img10 from "../../assets/fritto-misto-1643675303.webp";
import img11 from "../../assets/polenta-1643401533.jpg";
import img12 from "../../assets/vitello-tonnato-1643401533.webp";
const Galllery = () => {
  return (
    <div>
      <div className=" text-center mt-28">
        <h1 className="text-5xl font-bold">
          Some Italia <br /> Dishes by Best Chefs
        </h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut <br />{" "}
          assumenda excepturi exercitationem quasi. In deleniti <br /> eaque aut
          repudiandae et a id nisi.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 p-11 gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={img1} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={img2} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={img3} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={img4} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={img5} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={img6} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={img7} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={img8} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={img9} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={img10} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={img11} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={img12} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Galllery;
