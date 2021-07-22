import React from 'react'
import { Link } from 'react-router-dom';
import user from "../images/user.png";

const ContactDetail = (props) => {
    const { name, email } = props.location.state.contact;
    return (
        <div style={{alignItems: "center", alignContent: "center"}} className="ui main center">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                    <hr />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button style={{}} className="ui button blue center">Back to Contact List</button>
                </Link>
            </div>
        </div>
    )
}

export default ContactDetail
