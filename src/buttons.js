import React from 'react';
import Menu from './menu';

class Buttons extends React.Component {
    render() {
        return (
        <div>
            <button id="cm" onClick={(props) => console.log(Menu)}>CM</button>
            <button id="rf" onClick={(props) => console.log(props.target.id)}>RF</button>
        </div>
        )
    }
}

export default Buttons;