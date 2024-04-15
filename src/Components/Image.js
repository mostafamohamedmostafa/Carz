import React from "react";
export const Image = (props) => {
  return (
    <section className="imagesection container-fluid">
      <div>
        <img src={props.ImageSection} className="img-fluid"></img>
      </div>
    </section>
  );
};
