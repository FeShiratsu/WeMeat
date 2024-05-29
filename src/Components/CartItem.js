import styles from '../CSS/cartItem.module.css'
function CartItem({key,name,price,quantity,changeItem}){
    return (
        <div className={styles.cartItem}>
            <p className={styles.quantity}> {quantity} </p>
            <p className={styles.title} > {name} </p>
            <p className={styles.price} > {price} </p>
        </div>
    );
}

export default CartItem