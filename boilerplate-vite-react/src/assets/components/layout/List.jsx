/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function List(props) {
  const data = props.data;

  let html = "";
  data.forEach((e) => {
    html += `<li>${e}</li>`;
  });

  return (
    <div>
      <ul>{html}</ul>
    </div>
  );
}

export default List;
