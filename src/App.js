import React from 'react';
import './App.css';
// import firebase from "./firebaseConfig";

import Selects from './selects';
import Input from './inputs';
import Buts from './buts';

import Menu from './menu';
import Buttons from './buttons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() { // render = renderizar JS para HTML
    return (
      <div className="App">
        <header className="App-header">
          {/* criar um component para os scripts? */}
          <script src="/__/firebase/6.1.0/firebase-app.js"></script>
          <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-auth.js"></script>
          <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-database.js"></script>
          <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-firestore.js"></script>
          <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-functions.js"></script>
          <script src="/__/firebase/init.js"></script>
          {/* LOGIN */}
          <Input />
          <Buts />
          
          
          {/* CADASTRO */}
          <Selects />
          <Input />
          <Input />
          <Buts />

          {/* SALÃO */}
          <Buttons />
          <Menu />

          {/* COZINHA */}

        </header>
      </div>
    );
  }
}

export default App;


// setState() = estado final


// this.state.map(item, i =>
//   <Item nome={item.nome} preco={item.preco} key={i})
//   )


// class Item extends React.Component{
  // <li className="menu-item" style={this.style}></li>

  // style: {color = 'white', backGround: 'black'}
// }