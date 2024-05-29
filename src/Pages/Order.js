import OrderContainer from "../Components/OrderCont";
import createItem from "../Objects/OrderItem";
import {createItemJS} from "../Objects/OrderItem";
import styles from "../CSS/order.module.css"
import { useState } from "react";
import water from '../Images/water.jpg'
import mjew from '../Images/mjew.png'
import coke from '../Images/coke.png'
import b1 from '../Images/burgao.jpg'
import b2 from '../Images/b2.jpg'
import b3 from '../Images/b3.jpg'
import fries from '../Images/fries.jpg'
import onion from '../Images/rings.jpg'
import nuggies from '../Images/nuggies.jpg'
import nothing from '../Images/nothing.jpg'
import CartItem from "../Components/CartItem";

var burguers =
    [
        createItem("Viper", "Bacon, cheese and burguer.", 8.5, b1),
        createItem("Leslie", "Standard but with vegetables", 10.5, b2),
        createItem("Nala", "Everything you can expect", 17.0, b3)
    ]
var bonus =
    [
        createItem("Fries", "Chill.", 8.5, fries),
        createItem("Onion Rings", "Tasty", 10.5, onion),
        createItem("Nuggets", "Hm...nuggies", 17.0, nuggies)
    ]
var drinks =
    [
        createItem("Coke", "The usual.", 2.5, coke),
        createItem("Water", "Normal customer.", 1.5, water),
        createItem("Mountain Jew", "Energize.", 3.0, mjew)
    ]




function Order({cart,cartSet}) {
    
    const [indexBurguer, setBurguer] = useState(0);
    const [indexBonus, setBonus] = useState(0);
    const [indexDrinks, setDrinks] = useState(0);


    function AddToCart(item,counter){
        console.log(counter)
        let tempCart = cart
        tempCart[cart.length] = createItemJS({name: item.nome,price: item.price,quantity:item.quantity})
        cartSet(tempCart)
        console.log(cart,counter)
    }

    return (

        <div className={styles.container}>
            <main className={styles.order}>
                <OrderContainer AddCart={AddToCart} title="Burgers" setCounter={setBurguer} counter={indexBurguer} items={burguers} backColor="#"></OrderContainer>
                <OrderContainer AddCart={AddToCart} title="Bonus" setCounter={setBonus} counter={indexBonus} items={bonus} backColor="#"></OrderContainer>
                <OrderContainer AddCart={AddToCart} title="Drinks" setCounter={setDrinks} counter={indexDrinks} items={drinks} backColor="#"></OrderContainer>
            </main>

            <div className={styles.cart}>
                <p className={styles.cartTitle}>Cart</p>
                {
                    cart.map((item,index) => {
                        return <CartItem name={item.nome} price={item.price} quantity={item.quantity}></CartItem>
                    })
                }
            </div>
        </div>
    );
}
export default Order