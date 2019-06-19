import React from 'react';
import Data from './menu.json';

function Menu() { //extends React.Component{
    // render() {
    console.log(Object.keys(Data.CM))//.forEach(element => element))
    return (
        <div><button>{Object.keys(Data.CM)}</button></div>//.forEach(element => <button>{element}</button>)}</div>
    );
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