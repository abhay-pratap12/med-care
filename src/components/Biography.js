import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Diabities Cases</p>
          <h3><i class="fa-solid fa-face-meh-blank"></i></h3>
          <p>
          As of recent data, diabetes is a global health concern affecting millions worldwide. According to the International Diabetes Federation, approximately 463 million adults aged 20-79 were living with diabetes in 2019, and this number is projected to rise to 700 million by 2045 if current trends continue. The prevalence of diabetes varies across regions, with higher rates observed in countries undergoing rapid urbanization and lifestyle changes.

          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
