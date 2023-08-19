import React from "react";
import moment from "moment";

export default function FormattedDate() {
  let currentDateTime = moment().format("dddd hh:mm A");

  return <div className="date-time">{currentDateTime}</div>;
}
