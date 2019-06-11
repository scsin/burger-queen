import React from 'react';

class Selects extends React.Component {
    render() {
        return(
            <div>
                <input id="cozinha" type="radio" name="tipo" /> Cozinha
                <input id="salão" type="radio" name="tipo" /> Salão
            </div>
        )
    }
}

export default Selects;