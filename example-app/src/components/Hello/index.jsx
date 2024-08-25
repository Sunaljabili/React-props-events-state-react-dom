import React from "react";

function Hello(props) {
  const info =props.info();
  return <div>Salam,{info}</div>;
}

export default Hello;
