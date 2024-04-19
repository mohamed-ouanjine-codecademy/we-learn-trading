// AccordionItem.js
import React, { useState } from "react";
import Accordion from "./Accordion";

function AccordionItem({ header, body }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${isOpen ? "active" : "collapsed"}`} // Use Bootstrap's 'collapsed' class
          type="button"
          onClick={toggleAccordion}
        >
          <span className="fw-bold">{header}</span> {/* Use Bootstrap's 'fw-bold' class for bold text */}
        </button>
      </h2>
      <div
        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`} // Use Bootstrap's 'collapse' and 'show' classes
      >
        <div className="accordion-body">
          {Object.keys(body).includes("resources") ? (
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <p className="mb-3">{body.description}</p> {/* Add margin-bottom to the description */}
                </div>
              </div>
              <div className="row row-cols-1 g-3">
                {body.resources.map(({ title, url }, index) => (
                  <div className="col" key={index}>
                    <a
                      target="_blank"
                      href={url}
                      rel="noreferrer"
                      className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      {title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Accordion items={body} />
          )}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;