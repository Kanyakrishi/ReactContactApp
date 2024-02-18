import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { name, email, id } = props.contact;
  return (
    <div className="item" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <div style={{ display: "flex", alignItems: "center", flex: "1" }} id={id}>
        
      <img src={user} alt="user" className="ui avatar image" />{" "}
        <div className="content">
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>

      </div>
      <i className="trash alternate outline icon" style={{ color: "red", cursor: "pointer" }} onClick={() => props.clickHandler(id)}></i>
    </div>
  );
};

export default ContactCard;
