import React from 'react';
// import Login from './login';

class Input extends React.Component {
    render() {
        return(
            <div>
                <form>{/* onChange={this.props.getemail}> */}
                    <input onChange={this.props.getemail} type={this.props.typet} placeholder={this.props.one}></input>
                    <input onChange={this.props.getsenha} type={this.props.typep} placeholder={this.props.two}></input>
                </form>
            </div>
        )
    }
}

export default Input;