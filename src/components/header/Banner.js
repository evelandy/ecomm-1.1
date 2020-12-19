import React from 'react';
import '../styles/banner.css';

export default function Banner(props) {
    return (
        <div className="bannerContainer">
            <h2 className="bannerTitle">{props.msg}</h2>
        </div>
    );
}
