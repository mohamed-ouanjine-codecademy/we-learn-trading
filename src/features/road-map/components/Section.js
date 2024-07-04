// Section.js
import React from "react";
import Accordion from "../../../components/Accordion";

function Section({ sectionTitle, section }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2>{sectionTitle}</h2>
          </div>
        </div>
        <div className="row row-cols-1 g-4">
          <div className="col">
            <Accordion items={section}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;