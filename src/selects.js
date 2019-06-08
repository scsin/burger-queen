import React from 'react';

class Selects extends React.Component {
    render() {
        return(
            <div>
                <form>
                    {/* SELECIONAR SÓ UM DOS SELECTS */}
                    <input id="cozinha" type="radio" /> Cozinha
                    <input id="salão" type="radio" /> Salão
                </form>
            </div>
        )
    }
}

export default Selects;