import React from 'react';
import './App.css';
import firebase from "./firebaseConfig";
import withFirebaseAuth from 'react-with-firebase-auth';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Selects from './selects';
import Input from './inputs';
import Buts from './buts';

import Menu from './menu';
import Buttons from './buttons';
import { type } from 'os';
// import { QuerySnapshot } from '@google-cloud/firestore';

const firestore = firebase.firestore();
const firebaseAppAuth = firebase.auth();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: {
        email: "Email",
        passw: "Senha",
        name: "Nome",
        lName: "Sobrenome",
      },
      buttons: {
        login: "ENTRAR",
        firstAc: "PRIMEIRO ACESSO? CADASTRE-SE",
        cadastrar: "CADASTRAR",
        cancel: "CANCELAR",
      },
      type: {
        typep: "password",
        typet: "text",
      },
      inputs: {
        email: "",
        senha: "",
        displayName: "",
        sobrenome: ""
      }
    };
  }

  // PEDIDOS
  componentDidMount() {
    firestore.collection('BurgerQueen').get()
    .then((querySnapshot) => {
      const data = querySnapshot.docs.map(doc => doc.data());
      console.log(data);
    })
  }

  handleChange = (e, element) => {
    const newState = this.state.inputs;
    newState[element] = e.target.value;
    this.setState(newState);
    // console.log(this.state)
    // console.log(e, element)
  }

  handleClick = () => {
    // console.log(this.props)
    const infos = {
      email: this.state.inputs.email,
      senha: this.state.inputs.senha
    }
    firestore.collection('BurgerQueen').add(infos)

  }
  
  loginUser = () => {this.props.signInWithEmailAndPassword(this.state.inputs.email, this.state.inputs.senha)};
  createUser = () => {this.props.createUserWithEmailAndPassword(this.state.inputs.email, this.state.inputs.senha)};
  signOut = () => {this.props.signOut()}

  render() { // render = renderizar JS para HTML
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <script src="/__/firebase/6.1.1/firebase-app.js"></script>
          <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-auth.js"></script>
          <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-database.js"></script>
          <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-firestore.js"></script>
          <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-functions.js"></script>
          <script src="/__/firebase/init.js"></script>
          {/* CRIAR LOGIN E SENHA */}
          <Input getemail={(e) => this.handleChange((e), 'email')} getsenha={(e) => this.handleChange((e), 'senha')} typep={this.state.type.typep} typet={this.state.type.typet} one={this.state.placeholder.email} two={this.state.placeholder.passw} />
          <Buts onClick={this.handleClick} login={this.loginUser} create={this.createUser} one={this.state.buttons.login} two={this.state.buttons.firstAc} />

          {/* CADASTRO */}
          <Input getemail={(e) => this.handleChange((e), 'email')} getsenha={(e) => this.handleChange((e), 'senha')} typet={this.state.type.typet} one={this.state.placeholder.name} two={this.state.placeholder.lName} />
          <Input typep={this.state.type.typep} typet={this.state.type.typet} one={this.state.placeholder.email} two={this.state.placeholder.passw} />
          <Selects />
          <Buts one={this.state.buttons.cadastrar} two={this.state.buttons.cancel} />

          {/* SALÃO */}
          <Buttons />
          <Menu />

          {/* COZINHA */} oi bebe

        </header>
      </div>
    );
  }
}

export default withFirebaseAuth({firebaseAppAuth})(App);
// export default App;

// setState() = estado final


// this.state.map(item, i =>
//   <Item nome={item.nome} preco={item.preco} key={i})
//   )


// class Item extends React.Component{
  // <li className="menu-item" style={this.style}></li>

  // style: {color = 'white', backGround: 'black'}
// }