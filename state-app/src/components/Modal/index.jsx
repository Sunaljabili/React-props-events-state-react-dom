import React from "react";
import "./index.css"

function Modal({setOpenModal}) {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span onClick={()=>setOpenModal(false)} className="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}

export default Modal;
