import React from "react";

function ContactSummary(props) {
  return (
    <div className="contactSummary mb-2">
      <div className="contactItem border-bottom d-flex justify-content-between">
        <div className="titleWrap">
          <p className="title">Contact:</p>
        </div>
        <p>mkotik97@gmail.com</p>
      </div>
      <div className="contactItem border-bottom d-flex justify-content-between">
        <div className="titleWrap">
          <p className="title">Ship To:</p>
        </div>
        <p>14 Bramble Lane, Matawan, NJ, 07747</p>
      </div>
      <div className="contactItem border-bottom d-flex justify-content-between">
        <div className="titleWrap">
          <p className="title">Notes:</p>
        </div>
        <p>Leave package in the back</p>
      </div>
    </div>
  );
}

export default ContactSummary;
