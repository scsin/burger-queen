import React from 'react';

class Input extends React.Component {
    render() {
        return(
            <div>
                <form>
                    <input onInput={this.props.getname} onChange={this.props.getemail} type={this.props.typet} placeholder={this.props.one}></input>
                    <input onInput={this.props.getsobrenome} onChange={this.props.getsenha} type={this.props.typep} placeholder={this.props.two}></input>
                </form>
            </div>
        )
    }
}

// onChange={this.props.getemail}
// onChange={this.props.senha}


export default Input;