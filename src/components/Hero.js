import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
           DIABETES OCCURS WHEN THE BODY EITHER DOESN'T PRODUCE ENOUGH INSULIN OR CAN'T EFFECTIVELY USE THE INSULIN IT PRODUCES. THIS LEADS TO ELEVATED LEVELS OF GLUCOSE IN THE BLOOD, RESULTING IN DIABETES. FACTORS CONTRIBUTING TO DIABETES INCLUDE GENETIC PREDISPOSITION, LIFESTYLE FACTORS LIKE DIET AND PHYSICAL ACTIVITY, OBESITY, AND OTHER HEALTH CONDITIONS.

          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          
            <span><img src="/Vector.png" alt="vector" /></span>
          
          
        </div>
      </div>
    </>
  );
};

export default Hero;