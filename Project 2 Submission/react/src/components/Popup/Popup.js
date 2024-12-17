// import React from "react";
// import "./style.css";

// const Popup = ({ message, onClose }) => {
//   return (
//     <div className="popup-container">
//       <div className="popup">
//         <button className="close-button" onClick={onClose}>
//           X
//         </button>
//         <p>{JSON.stringify(message)}</p>
//       </div>
//     </div>
//   );
// };

// export default Popup;


// import React from "react";
// import "./style.css";

// const Popup = ({ message, onClose }) => {
//   return (
//     <div className="popup-container">
//       <div className="popup">
//         <button className="close-button" onClick={onClose}>
//           <i className="fa fa-times"></i>
//         </button>
//         <div className="message">{message}</div>
//       </div>
//     </div>
//   );
// };

// export default Popup;


import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Popup = ({ message, onClose }) => {
  const navigae = useNavigate();
  
  const handleBackClick = () => {
    navigae('/');
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <div className="message">{message}</div>
        <button className="back-button" onClick={handleBackClick}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Popup;
