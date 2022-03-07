import ItemCount from "./ItemCount"


//const ItemListContainer = (props) => {

const miOnAdd = ()  =>{}

    

    function ItemListContainer (props) {
        return (
            <>
            <main className="conten-main">
            <h2>Bienvenido/a a la Tienda online de {props.nombre} {props.apellido}
            {props.rubro}</h2>
            <ItemCount initial= {1}  onAdd={miOnAdd} stock= {8}/>
            
            
    </main>
    
            </>
            
    
        )
    } 




export default ItemListContainer;
 

/* 
import{ usseEffect, useState, useEffect} from "react";
import Item from "./Item";
import ItemList from "./ItemList";
import {list,getList} from "../db"
export default function ItemListContainer (){
    const [items, setItems] =useState([]);
    const [loading, setLoading]= useState(true);
    useEffect(async () => {
        setLoading(true);
        //getList(list,5000)
        //  .then((res) => setItems(res))
        //  .catch((e)  => console.log(e));

        try{
            const data =await getList(list, 2000);
            setItems(data);
            setLoading(false);
        }
    }


    )

} */