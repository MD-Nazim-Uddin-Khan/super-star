import React from 'react';
import './Detail.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

const Detail = (props) => {
    const { img, name, salary } = props.star;

    const flagStyle = {
        height: '300px',
        width: '300px'
    }
    const countryStyle = {
        border: '1px solid red',
        margin: '10px',
        padding: '10px',
        textAlign: 'center'
    }

    return (
        <div style={countryStyle}>
            <img style={flagStyle} src={img} alt="" />
            <h4>Name : {name}</h4>
            <h5>Salary : {salary}</h5>
            
            <button
                onClick={() => props.handleAddPlayer(props.star)}
                className="main-btn"
            >
                <FontAwesomeIcon className="fontIcon" icon={faAddressCard}/><span className="main-btn2">Details</span>
                </button>
        </div>
    );
};

export default Detail;