import React from "react";
import "./index.css"

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.OnClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};

/*
// Usage
          {isOpen && <Popup
            content={<>
              <b>Design your Popup</b>
              <button>Test button</button>
            </>}
            OnClose={togglePopup}
          /> }
*/

export default Popup;