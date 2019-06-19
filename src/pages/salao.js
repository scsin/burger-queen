import React from 'react';

import Image from '../image';
import Buts from '../buts';
import Input from '../inputs';
import Menu from '../menu';
import firebase from '../firebaseConfig';

const firestore = firebase.firestore();

class Salao extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cliente: "",
            pedido: {},
        }
    }

    handleChange = (e, element) => {
        const newState = this.state;
        newState[element] = e.target.value;
        this.setState(newState);
    }
    
    // get UID do funcionário, add cliente e pedido no firestore pelo UID

    // firestore.collection('BurgerQueen').add(infos)
    
    // snapshot? firestore.collection('BurgerQueen').get(infos)

    handleClick = () => {
        const infos = {
            cliente: this.state.cliente,
            pedido: this.state.pedido
        }
        console.log(this.state)
        let coll = firestore.collection('pedidos');
        let query = coll.get()
        // let x = coll.update()
            .then(snapshot => {
                snapshot.forEach(element => {
                    let x = element.data();
                    x.add(infos)
                    
                });
        })
    }

    // component em salao/cozinha para pegar os pedidos do firebase

    render() {
        return(
            <div>
                <Image height='50px' width='auto' />
                <Input className="cliente" getname={(e) => this.handleChange(e, 'cliente')} getsobrenome={(e) => this.handleChange(e, 'pedido')} one="Cliente" />
                {/* ADD NOME DO GARÇOM AO PEDIDO */}
                <Buts className="adicionarPedido" onClick={this.handleClick} one='+' />
                <Buts onClick={console.log(this.state.pedido)} />
                <Menu />
            </div>
        )
    }
}

export default Salao;