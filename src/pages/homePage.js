import React from 'react';
import firebase from '../firebaseConfig'
import withFirebaseAuth from 'react-with-firebase-auth';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';

import Cadastro from './cadastro';

import {styles} from '../styles';
import Logo from '../image';
import Input from '../inputs';
import Buts from '../buts';
import { QuerySnapshot } from '@google-cloud/firestore';

const firestore = firebase.firestore();
const firebaseAppAuth = firebase.auth();

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            senha: ""
        }
    }

    handleChange = (e, element) => {
        const newState = this.state;
        newState[element] = e.target.value;
        this.setState(newState);
    }

    handleClick = () => {
        const infos = {
            email: this.state.email,
            senha: this.state.senha
        }
        this.loginUser();
        // firestore.collection('BurgerQueen').add(infos)
    }
    
    loginUser = () => {
        this.props.signInWithEmailAndPassword(this.state.email,
            this.state.senha)
            .then(() => {
                console.log('red')
                return <Redirect to="/salao" />
            })
    };

    render() {
        return (
            <div className="homepage">
                <Logo className="logo-bq" />
                <Input getemail={(e) => this.handleChange((e), 'email')} getsenha={(e) => this.handleChange((e), 'senha')} typep="password" typet="text" one="Email" two="Senha" />
                <Buts style={{backgroundColor: "#69306D", fontWeight: 500}} onClick={this.handleClick} one="ENTRAR" />
                <Buts style={{backgroundColor: "transparent", color: "#FEBE10", border: "none", boxShadow: "none", fontWeight: 700}} one="PRIMEIRO ACESSO? CADASTRE-SE" />
            </div>
        )
    }
}

export default withFirebaseAuth({firebaseAppAuth})(HomePage);