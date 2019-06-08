import React from 'react';

class Buts extends React.Component {
    render() {
        // this.routeChange = this.routeChange.bind(this);
        return(
            <div>
                <button onClick={this.routeChange}>{"nome do botão"}</button>
                <button onClick={this.routeChange}>{"nome do botão"}</button>
            </div>
        )
    }
}

export default Buts;