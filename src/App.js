import React from 'react';
import './App.css';
import firebase from "./firebaseConfig";
import withFirebaseAuth from 'react-with-firebase-auth';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';

import HomePage from './pages/homePage';
import Cadastro from './pages/cadastro';
import Salao from './pages/salao';
import Cozinha from './pages/cozinha';

const firestore = firebase.firestore();
const firebaseAppAuth = firebase.auth();

  // // PEDIDOS
  // componentDidMount() {
  //   firestore.collection('BurgerQueen').get()
  //   .then((querySnapshot) => {
  //     const data = querySnapshot.docs.map(doc => doc.data());
  //     console.log(data);
  //   })
  // }

// class App extends React.Component {
function App() {
  // signOut = () => {this.props.signOut()}

  // render() { // render = renderizar JS para HTML
    // console.log(this.props)
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
          {/* <link rel="stylesheet" src="style.css" /> */}

          <Route className="home-page" path="/" exact component={HomePage} />

          <Route path="/cadastro" component={Cadastro} />

          {/* SALÃO */}
          <Route path="/salao" component={Salao} />

          {/* COZINHA */} oi bebe
          <Route path="/cozinha" component={Cozinha} />
          
        </header>
      </div>
    </Router>
  );
}
// }

export default App;
// export default App;

// setState() = estado final


// this.state.map(item, i =>
//   <Item nome={item.nome} preco={item.preco} key={i})
//   )


// class Item extends React.Component{
  // <li className="menu-item" style={this.style}></li>

  // style: {color = 'white', backGround: 'black'}
// }