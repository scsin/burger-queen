import React from 'react';
import Data from './menu.json';

class Menu extends React.Component{
    render() {
        const x = (element) => element;
        return (
        <div>
            <p>{Object.keys(x(Data.CM))}: {Object.values(x(Data.CM))}</p>
        </div>
        )
    }
}

export default Menu;



//     "RF":
// {
//     "Hambúrguer simples": 10,
//     "Hambúrguer duplo":	15,
//     "Batata frita": 5,
//     "Anéis de cebola": 5,
//     "Água 500ml": 5,
//     "Água 750ml": 7,
//     "Bebida gaseificada 500ml":	7,
//     "Bebida gaseificada 750ml":	10
// }