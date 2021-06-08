import React from "react";
import "./ChoosePlatform.scss";

const ChoosePlatform = ({ onClickHandler, platform }) => {
  return (
    <div className="mobile" onClick={() => onClickHandler("Mobile")}>
      <img
        className="mobileImg"
        src={`${
          platform === "Mobile"
            ? "/images/mobile_selected.png"
            : "/images/mobile.png"
        }`}
      />
      <div
        className={`${
          platform === "Mobile" ? "mobileTitle selected" : "mobileTitle"
        }`}
      >
        검은 사막 <br></br>Mobile
      </div>
    </div>
  );
};

export default ChoosePlatform;
