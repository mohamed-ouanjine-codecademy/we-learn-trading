// Accordion.js
import React from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ items }) {
  return (
    <div className="accordion">
      {Object.entries(items).map(([key, value], i) => (
        <AccordionItem key={i} header={key} body={value} />
      ))}
    </div>
  );
}

export default Accordion;