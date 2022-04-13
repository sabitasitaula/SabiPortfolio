import React from "react";

function Icon({icon,title,description}) {
  return (
    <div>
      <div>
        <i className={icon}></i>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Icon;
