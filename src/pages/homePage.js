import React from 'react';
import firebase from '../firebaseConfig'
import withFirebaseAuth from 'react-with-firebase-auth';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';

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
    }
    
    loginUser = () => {
        this.props.signInWithEmailAndPassword(this.state.email,
            this.state.senha)
            .then((resp) => {
                if(resp){
                    firestore.collection("user").doc(resp.user.uid).get().then(doc => {
                        // const data = doc.data();
                        firestore.collection("teste").doc(resp.user.uid).get().then(x => {
                            this.props.history.push(x.data().type);
                        })
                    })
                }
            })
    };

    render() {
        return (
            <div className="homepage">
                <Logo className="logo-bq" height="200px" width="auto" />
                <Input getemail={(e) => this.handleChange((e), 'email')} getsenha={(e) => this.handleChange((e), 'senha')} typep="password" typet="text" one="Email" two="Senha" />
                <Buts style={{backgroundColor: "#69306D", fontWeight: 500}} onClick={this.handleClick} one="ENTRAR" />
                <Link to="/cadastro"><Buts style={{backgroundColor: "transparent", color: "#FEBE10", border: "none", boxShadow: "none", fontWeight: 700}} one="PRIMEIRO ACESSO? CADASTRE-SE" /></Link>
            </div>
        )
    }
}

export default withFirebaseAuth({firebaseAppAuth})(HomePage);