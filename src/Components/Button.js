import styles from '../CSS/button.module.css'

function Button({text,func,user,pass}){
    function teste(){
        console.log(user,pass);
        func(user,pass)
        
    }
    return(
        <div className={styles.button}>
            <button onClick={(event) => {teste()}}>{text}</button>
        </div>
    )
}

export default Button