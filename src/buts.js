import React from 'react';

function Buts(props) {
    return (
        <div>
            <a style={props.style} className="waves-effect waves-light btn" onClick={props.onClick}>{props.one}</a>
        </div>
    )
}

export default Buts;