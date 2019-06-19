import React from 'react';
import firebase from '../firebaseConfig'
import withFirebaseAuth from 'react-with-firebase-auth';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';

import Logo from '../image';
import Input from '../inputs';
import Buts from '../buts';
import Selects from '../selects';

const firestore = firebase.firestore();
const firebaseAppAuth = firebase.auth();

class Cadastro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            displayName: "",
            sobrenome: "",
            type: ""
        }
    }

    handleChange = (e, element) => {
        const newState = this.state;
        if(e.target.value == 'on') {
            newState[element] = e.target.id;
        } else {
            newState[element] = e.target.value;
        }
        this.setState(newState)
    }

    handleClick = () => {
        const infos = {
            email: this.state.email,
            senha: this.state.senha,
            displayName: this.state.displayName,
            sobrenome: this.state.sobrenome,
            type: this.state.type
        }
        this.createUser(infos)
    }

    createUser = (infos) => {
        this.props.createUserWithEmailAndPassword(this.state.email,
            this.state.senha)
            .then((resp) => {
                if(resp) {
                    firestore.collection("user").doc(resp.user.uid).get().then(doc => {
                        firestore.collection("teste").doc(resp.user.uid).set(infos)
                        this.props.history.push(this.state.type)
                    })
                }
            })
    };

    render() {
        return(
            <div>
                <Logo className="logo-bq" />
                <Input getname={(e) => this.handleChange((e), 'displayName')} getsobrenome={(e) => this.handleChange((e), 'sobrenome')} typet="text" one="Nome" two="Sobrenome" />
                <Input getemail={(e) => this.handleChange((e), 'email')} getsenha={(e) => this.handleChange((e), 'senha')} typep="password" typet="text" one="Email" two="Senha" />
                <Selects getType={(e) => this.handleChange((e), 'type')} />
                <Buts style={{backgroundColor: "#69306D"}} one="CADASTRAR" onClick={this.handleClick} />
                <Link to="/"><Buts style={{backgroundColor: "#FEBE10"}} one="CANCELAR" /></Link>
            </div>
        )
    }
}

export default withFirebaseAuth({firebaseAppAuth})(Cadastro);