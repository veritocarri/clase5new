import { useState } from "react";

const ItemCount = (props) => {
    const [cont,setCont]= useState(props.initial)

    const handleClick = () =>{
        if(cont<= props.stock && cont>=1){
        setCont(cont + 1)
        }
    }
    const subtract = () => {
        if(cont>= props.initial ){
        setCont(cont - 1)
        }
    }
    const confirm = ()=> {
     setCont (1) 
 }
 return ( <div className="itemCount">
 
<p id="miC"> Mi contador : {cont}</p>
<button id="boton1" onClick={handleClick}>sumar producto</button>
<button id="boton2" onClick={subtract}>quitar producto</button>
<button id="boton3" onClick={confirm}>confirmar compra</button>
 

 </div>
 
 );
}   



export default ItemCount