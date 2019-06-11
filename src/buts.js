import React from 'react';
// import Login from './login';

class Buts extends React.Component {
    render() {
        // this.routeChange = this.routeChange.bind(this);
        return(
            <div>
                <button onClick={this.props.onClick} onClick={this.props.login}>{this.props.one}</button>
                <button onClick={this.props.onClick} onClick={this.props.create}>{this.props.two}</button>
            </div>
        )
    }
}

export default Buts;