import React from "react";

function Alert(props) {
  const getAlertIcon = (type) => {
    switch (type) {
      case "success":
        return "fas fa-check-circle";
      case "warning":
        return "fas fa-exclamation-triangle";
      case "error":
        return "fas fa-times-circle";
      default:
        return "fas fa-info-circle";
    }
  };

  return (
    <div className="alert-container">
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`}>
          <i className={getAlertIcon(props.alert.type)}></i>
          <span>{props.alert.msg}</span>
        </div>
      )}
    </div>
  );
}

export default Alert;
