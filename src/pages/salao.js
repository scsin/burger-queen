import React from 'react';
import Buts from '../buts';

class Salao extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // firestore.collection('BurgerQueen').add(infos)

    // component em salao/cozinha para pegar os pedidos do firebase
    // console.log(firestore.collection('BurgerQueen').get())

    render() {
        return(
            <Buts />
            
        )
    }
}

export default Salao;