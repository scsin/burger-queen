import React from 'react';

class Selects extends React.Component {
    render() {
        return(
            <div>
                <form action="#">
                    <p><label><input id="cozinha" type="radio" name="group1" onChange={this.props.getType} /><span>Cozinha</span></label></p>
                    <p><label><input id="salão" type="radio" name="group1" onChange={this.props.getType} /><span>Salão</span></label></p>
                </form>
            </div>
        )
    }
}

export default Selects;