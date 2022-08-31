import React from "react";

import avatar from "../images/avatar.PNG";

const ContactCard = (props) => {

    const {id, name, email} = props.contact;

    return (
        <div className="item" style={{display:"flex"}}>
            <img className="ui avatar image" src={avatar} alt="avatar" />
                <div className="content">
                    
                    <div className="header"> {name} </div>
                    <div>{email}</div>
                </div>
                <i className="trash alternate outline icon"
                style={{color: "red", marginTop: "7px", marginLeft:"20px"}}
                onClick={() => props.clickHandler(id)} >
                </i>
            </div>
    );

};

export default ContactCard;